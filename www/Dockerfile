
##############################################################################
##############################################################################

from node as node-base

arg svc=www
workdir /opt/ld51/${svc}/
add package.json package-lock.json ./
run npm install -y
add webpack.config.js ./
add babelrc.json ./.babelrc

##############################################################################
##############################################################################

from node-base as node-dev
cmd [ "npm", "run", "server" ]

##############################################################################
##############################################################################

from scratch as node-prod
run npm run build
copy --from="node-base" /opt/ld51/${svc}/static/* /opt/ld51/static/
copy --from="node-base" /opt/ld51/${svc}/public/* /opt/ld51/static/node/
