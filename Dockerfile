# --- Build stage ---
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Vite inlines VITE_* vars at build time, so they must be passed as build args
# (not .env, which is gitignored/dockerignored): e.g.
#   docker build --build-arg VITE_WHATSAPP_NUMBER=91XXXXXXXXXX --build-arg VITE_EMAIL_ID=you@example.com .
ARG VITE_WHATSAPP_NUMBER
ARG VITE_EMAIL_ID
ENV VITE_WHATSAPP_NUMBER=$VITE_WHATSAPP_NUMBER
ENV VITE_EMAIL_ID=$VITE_EMAIL_ID

RUN npm run build

# --- Runtime stage ---
FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
