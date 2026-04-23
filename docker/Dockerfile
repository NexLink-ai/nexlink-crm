FROM ghcr.io/frappe/build:version-16 AS builder

USER frappe
WORKDIR /home/frappe

RUN echo '[{"url":"https://github.com/NexLink-ai/nexlink-crm","branch":"white-label"}]' > /tmp/apps.json && \
    bench init \
        --frappe-branch=version-16 \
        --frappe-path=https://github.com/frappe/frappe \
        --apps_path=/tmp/apps.json \
        --no-procfile \
        --no-backups \
        --skip-redis-config-generation \
        /home/frappe/frappe-bench && \
    cd /home/frappe/frappe-bench && \
    echo "{}" > sites/common_site_config.json && \
    find apps -mindepth 1 -path "*/.git" | xargs rm -fr

FROM ghcr.io/frappe/base:version-16

USER frappe
COPY --from=builder --chown=frappe:frappe /home/frappe/frappe-bench /home/frappe/frappe-bench
WORKDIR /home/frappe/frappe-bench

VOLUME ["/home/frappe/frappe-bench/sites", "/home/frappe/frappe-bench/logs"]

CMD ["/home/frappe/frappe-bench/env/bin/gunicorn", \
    "--chdir=/home/frappe/frappe-bench/sites", \
    "--bind=0.0.0.0:8000", \
    "--threads=4", \
    "--workers=2", \
    "--worker-class=gthread", \
    "--worker-tmp-dir=/dev/shm", \
    "--timeout=120", \
    "--preload", \
    "frappe.app:application"]
