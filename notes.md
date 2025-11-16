# coolify deploy errors

## how to make sure dev.chloechartrain.fr reach localhost:3000

- test 1 :

  - **Domains for front** : https://dev.chloechartrain.fr,https://www.dev.chloechartrain.fr
  - **Docker Compose Content (raw)** :

    ```
    services:
      front:
        build: .
        ports:
          - '3000:3000'
        restart: unless-stopped
        environment:
          - NODE_ENV=development
    ```

  - **Docker Compose Content** :

    ```
    services:
      front:
        build: .
        ports:
          - '3000:3000'
        restart: unless-stopped
        environment:
          NODE_ENV: development
          COOLIFY_BRANCH: '"dev"'
          COOLIFY_RESOURCE_UUID: docgwo4wwc484s84gsk8c0cg
          COOLIFY_CONTAINER_NAME: front-docgwo4wwc484s84gsk8c0cg-102356983834
          SERVICE_URL_FRONT: 'https://dev.chloechartrain.fr'
          SERVICE_FQDN_FRONT: dev.chloechartrain.fr
          COOLIFY_URL: 'https://dev.chloechartrain.fr,https://www.dev.chloechartrain.fr'
          COOLIFY_FQDN: 'dev.chloechartrain.fr,www.dev.chloechartrain.fr'
          SERVICE_NAME_FRONT: front
        container_name: front-docgwo4wwc484s84gsk8c0cg-102356983834
        labels:
          - coolify.managed=true
          - coolify.version=4.0.0-beta.442
          - coolify.applicationId=2
          - coolify.type=application
          - coolify.name=front-docgwo4wwc484s84gsk8c0cg-102356983834
          - coolify.resourceName=camille-chartrainchloenextjsmaster-b0ww84kg0og48sgwkgssc4so
          - coolify.projectName=chloechartrain
          - coolify.serviceName=camille-chartrainchloenextjsmaster-b0ww84kg0og48sgwkgssc4so
          - coolify.environmentName=development
          - coolify.pullRequestId=0
          - traefik.enable=true
          - traefik.http.middlewares.gzip.compress=true
          - traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https
          - traefik.http.routers.http-0-docgwo4wwc484s84gsk8c0cg-front.entryPoints=http
          - traefik.http.routers.http-0-docgwo4wwc484s84gsk8c0cg-front.middlewares=redirect-to-https
          - 'traefik.http.routers.http-0-docgwo4wwc484s84gsk8c0cg-front.rule=Host(`dev.chloechartrain.fr`) && PathPrefix(`/`)'
          - traefik.http.routers.http-1-docgwo4wwc484s84gsk8c0cg-front.entryPoints=http
          - traefik.http.routers.http-1-docgwo4wwc484s84gsk8c0cg-front.middlewares=redirect-to-https
          - 'traefik.http.routers.http-1-docgwo4wwc484s84gsk8c0cg-front.rule=Host(`www.dev.chloechartrain.fr`) && PathPrefix(`/`)'
          - traefik.http.routers.https-0-docgwo4wwc484s84gsk8c0cg-front.entryPoints=https
          - traefik.http.routers.https-0-docgwo4wwc484s84gsk8c0cg-front.middlewares=gzip
          - 'traefik.http.routers.https-0-docgwo4wwc484s84gsk8c0cg-front.rule=Host(`dev.chloechartrain.fr`) && PathPrefix(`/`)'
          - traefik.http.routers.https-0-docgwo4wwc484s84gsk8c0cg-front.tls.certresolver=letsencrypt
          - traefik.http.routers.https-0-docgwo4wwc484s84gsk8c0cg-front.tls=true
          - traefik.http.routers.https-1-docgwo4wwc484s84gsk8c0cg-front.entryPoints=https
          - traefik.http.routers.https-1-docgwo4wwc484s84gsk8c0cg-front.middlewares=gzip
          - 'traefik.http.routers.https-1-docgwo4wwc484s84gsk8c0cg-front.rule=Host(`www.dev.chloechartrain.fr`) && PathPrefix(`/`)'
          - traefik.http.routers.https-1-docgwo4wwc484s84gsk8c0cg-front.tls.certresolver=letsencrypt
          - traefik.http.routers.https-1-docgwo4wwc484s84gsk8c0cg-front.tls=true
          - 'caddy_0.encode=zstd gzip'
          - 'caddy_0.handle_path.0_reverse_proxy={{upstreams}}'
          - 'caddy_0.handle_path=/*'
          - caddy_0.header=-Server
          - 'caddy_0.try_files={path} /index.html /index.php'
          - 'caddy_0=https://dev.chloechartrain.fr'
          - 'caddy_1.encode=zstd gzip'
          - 'caddy_1.handle_path.1_reverse_proxy={{upstreams}}'
          - 'caddy_1.handle_path=/*'
          - caddy_1.header=-Server
          - 'caddy_1.try_files={path} /index.html /index.php'
          - 'caddy_1=https://www.dev.chloechartrain.fr'
          - caddy_ingress_network=docgwo4wwc484s84gsk8c0cg
        networks:
          docgwo4wwc484s84gsk8c0cg: null
    networks:
      docgwo4wwc484s84gsk8c0cg:
        name: docgwo4wwc484s84gsk8c0cg
        external: true
    ```

- test 2 :

  - **Domains for front** : https://dev.chloechartrain.fr:3000,https://www.dev.chloechartrain.fr:3000
  - **Docker Compose Content (raw)** :

    ```
    services:
      front:
        build: .
        ports:
          - '3000:3000'
        restart: unless-stopped
        environment:
          - NODE_ENV=development
    ```

  - **Docker Compose Content** :

    ```
    services:
      front:
        build: .
        ports:
          - '3000:3000'
        restart: unless-stopped
        environment:
          NODE_ENV: development
          COOLIFY_BRANCH: '"dev"'
          COOLIFY_RESOURCE_UUID: docgwo4wwc484s84gsk8c0cg
          COOLIFY_CONTAINER_NAME: front-docgwo4wwc484s84gsk8c0cg-101525743226
          SERVICE_URL_FRONT: 'https://dev.chloechartrain.fr'
          SERVICE_FQDN_FRONT: dev.chloechartrain.fr
          COOLIFY_URL: 'https://dev.chloechartrain.fr,https://www.dev.chloechartrain.fr'
          COOLIFY_FQDN: 'dev.chloechartrain.fr,www.dev.chloechartrain.fr'
          SERVICE_NAME_FRONT: front
        container_name: front-docgwo4wwc484s84gsk8c0cg-101525743226
        labels:
          - coolify.managed=true
          - coolify.version=4.0.0-beta.442
          - coolify.applicationId=2
          - coolify.type=application
          - coolify.name=front-docgwo4wwc484s84gsk8c0cg-101525743226
          - coolify.resourceName=camille-chartrainchloenextjsmaster-b0ww84kg0og48sgwkgssc4so
          - coolify.projectName=chloechartrain
          - coolify.serviceName=camille-chartrainchloenextjsmaster-b0ww84kg0og48sgwkgssc4so
          - coolify.environmentName=development
          - coolify.pullRequestId=0
          - traefik.enable=true
          - traefik.http.middlewares.gzip.compress=true
          - traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https
          - traefik.http.routers.http-0-docgwo4wwc484s84gsk8c0cg-front.entryPoints=http
          - traefik.http.routers.http-0-docgwo4wwc484s84gsk8c0cg-front.middlewares=redirect-to-https
          - 'traefik.http.routers.http-0-docgwo4wwc484s84gsk8c0cg-front.rule=Host(`dev.chloechartrain.fr`) && PathPrefix(`/`)'
          - traefik.http.routers.http-0-docgwo4wwc484s84gsk8c0cg-front.service=http-0-docgwo4wwc484s84gsk8c0cg-front
          - traefik.http.routers.http-1-docgwo4wwc484s84gsk8c0cg-front.entryPoints=http
          - traefik.http.routers.http-1-docgwo4wwc484s84gsk8c0cg-front.middlewares=redirect-to-https
          - 'traefik.http.routers.http-1-docgwo4wwc484s84gsk8c0cg-front.rule=Host(`www.dev.chloechartrain.fr`) && PathPrefix(`/`)'
          - traefik.http.routers.http-1-docgwo4wwc484s84gsk8c0cg-front.service=http-1-docgwo4wwc484s84gsk8c0cg-front
          - traefik.http.routers.https-0-docgwo4wwc484s84gsk8c0cg-front.entryPoints=https
          - traefik.http.routers.https-0-docgwo4wwc484s84gsk8c0cg-front.middlewares=gzip
          - 'traefik.http.routers.https-0-docgwo4wwc484s84gsk8c0cg-front.rule=Host(`dev.chloechartrain.fr`) && PathPrefix(`/`)'
          - traefik.http.routers.https-0-docgwo4wwc484s84gsk8c0cg-front.service=https-0-docgwo4wwc484s84gsk8c0cg-front
          - traefik.http.routers.https-0-docgwo4wwc484s84gsk8c0cg-front.tls.certresolver=letsencrypt
          - traefik.http.routers.https-0-docgwo4wwc484s84gsk8c0cg-front.tls=true
          - traefik.http.routers.https-1-docgwo4wwc484s84gsk8c0cg-front.entryPoints=https
          - traefik.http.routers.https-1-docgwo4wwc484s84gsk8c0cg-front.middlewares=gzip
          - 'traefik.http.routers.https-1-docgwo4wwc484s84gsk8c0cg-front.rule=Host(`www.dev.chloechartrain.fr`) && PathPrefix(`/`)'
          - traefik.http.routers.https-1-docgwo4wwc484s84gsk8c0cg-front.service=https-1-docgwo4wwc484s84gsk8c0cg-front
          - traefik.http.routers.https-1-docgwo4wwc484s84gsk8c0cg-front.tls.certresolver=letsencrypt
          - traefik.http.routers.https-1-docgwo4wwc484s84gsk8c0cg-front.tls=true
          - traefik.http.services.http-0-docgwo4wwc484s84gsk8c0cg-front.loadbalancer.server.port=3000
          - traefik.http.services.http-1-docgwo4wwc484s84gsk8c0cg-front.loadbalancer.server.port=3000
          - traefik.http.services.https-0-docgwo4wwc484s84gsk8c0cg-front.loadbalancer.server.port=3000
          - traefik.http.services.https-1-docgwo4wwc484s84gsk8c0cg-front.loadbalancer.server.port=3000
          - 'caddy_0.encode=zstd gzip'
          - 'caddy_0.handle_path.0_reverse_proxy={{upstreams 3000}}'
          - 'caddy_0.handle_path=/*'
          - caddy_0.header=-Server
          - 'caddy_0.try_files={path} /index.html /index.php'
          - 'caddy_0=https://dev.chloechartrain.fr'
          - 'caddy_1.encode=zstd gzip'
          - 'caddy_1.handle_path.1_reverse_proxy={{upstreams 3000}}'
          - 'caddy_1.handle_path=/*'
          - caddy_1.header=-Server
          - 'caddy_1.try_files={path} /index.html /index.php'
          - 'caddy_1=https://www.dev.chloechartrain.fr'
          - caddy_ingress_network=docgwo4wwc484s84gsk8c0cg
        networks:
          docgwo4wwc484s84gsk8c0cg: null
    networks:
      docgwo4wwc484s84gsk8c0cg:
        name: docgwo4wwc484s84gsk8c0cg
        external: true
    ```

- compare test 1 & 2 :

  ```
  >> diff test1 test2
  >       - traefik.http.routers.http-0-docgwo4wwc484s84gsk8c0cg-front.service=http-0-docgwo4wwc484s84gsk8c0cg-front
  >       - traefik.http.routers.http-1-docgwo4wwc484s84gsk8c0cg-front.service=http-1-docgwo4wwc484s84gsk8c0cg-front
  >       - traefik.http.routers.https-0-docgwo4wwc484s84gsk8c0cg-front.service=https-0-docgwo4wwc484s84gsk8c0cg-front
  >       - traefik.http.routers.https-1-docgwo4wwc484s84gsk8c0cg-front.service=https-1-docgwo4wwc484s84gsk8c0cg-front
  >       - traefik.http.services.http-0-docgwo4wwc484s84gsk8c0cg-front.loadbalancer.server.port=3000
  >       - traefik.http.services.http-1-docgwo4wwc484s84gsk8c0cg-front.loadbalancer.server.port=3000
  >       - traefik.http.services.https-0-docgwo4wwc484s84gsk8c0cg-front.loadbalancer.server.port=3000
  >       - traefik.http.services.https-1-docgwo4wwc484s84gsk8c0cg-front.loadbalancer.server.port=3000
  ---
  <       - 'caddy_0.handle_path.0_reverse_proxy={{upstreams}}'
  >       - 'caddy_0.handle_path.0_reverse_proxy={{upstreams 3000}}'
  ---
  <       - 'caddy_1.handle_path.1_reverse_proxy={{upstreams}}'
  >       - 'caddy_1.handle_path.1_reverse_proxy={{upstreams 3000}}'
  ```

#### solution

just put :3000 in domains :
`**Domains for front** : https://dev.chloechartrain.fr:3000,https://www.dev.chloechartrain.fr:3000`

---

## error 404

- `docker logs coolify-proxy` :

  ```
  2025-11-16T12:27:34Z ERR Unable to obtain ACME certificate for domains error="unable to generate a certificate for the domains [www.dev.chloechartrain.fr]: error: one or more domains had a problem:\n[www.dev.chloechartrain.fr] acme: error: 400 :: urn:ietf:params:acme:error:dns :: DNS problem: NXDOMAIN looking up A for www.dev.chloechartrain.fr - check that a DNS record exists for this domain; DNS problem: NXDOMAIN looking up AAAA for www.dev.chloechartrain.fr - check that a DNS record exists for this domain\n" ACME CA=https://acme-v02.api.letsencrypt.org/directory acmeCA=https://acme-v02.api.letsencrypt.org/directory domains=["www.dev.chloechartrain.fr"] providerName=letsencrypt.acme routerName=https-1-docgwo4wwc484s84gsk8c0cg-front@docker rule="Host(`www.dev.chloechartrain.fr`) && PathPrefix(`/`)"
  ```

  - this means www.dev.chloechatrain.fr is not defined in DNS records

#### solution

just add the right record :

```
A       @           0   82.112.254.162             14400
A       coolify     0   82.112.254.162             3600
A       dev         0   82.112.254.162             3600
CNAME   www         0   chloechartrain.fr          3600
CNAME   www.coolify 0   coolify.chloechartrain.fr  3600
CNAME   www.dev     0   dev.chloechartrain.fr      3600
```

- 3600 TTL = 1 hour (good for stable environment like production)
- CNAME for www : this is a convention, and usefull to only change one A record if ip change.
  - But CNAME cannot be used for every records -> if `dev.chloechartrain.fr` is a CNAME to `chloechartrain.fr`, then `www.dev.chloechartrain.fr` cannot also be a CNAME to `chloechartrain.fr`, this creates a loop and is not valid DNS
