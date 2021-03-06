FROM node:8-alpine as builder

RUN mkdir /app
COPY . /app
RUN cd /app \
 && npm i --loglevel=warn \
 && $(npm bin)/ng build --prod --aot


FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY nginx-default.conf /etc/nginx/conf.d/default.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
