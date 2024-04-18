FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443

COPY api.tinzer.pro /etc/letsencrypt/live/api.tinzer.pro

CMD ["nginx", "-g", "daemon off;"]