# LIGHT & DARK SIDE

Build a web application emulating a light switcher.

## Stack

Frontend: Vue
Backend / APIs: Mongo & Node (Legacy)

## Implementation

The application has been split into a SPA and an APIs service.

Build project with `docker-compose`

```bash
docker-compose build
docker-compose up
```

It will run three containers: api, webapp, and mongo.

Backend exposed @ 3000
  
- `/` to see stats about lights
- `/reset` to delete and recreate the default light
- `/light/(on||off)` to change default light status

Frontend exposed @ 5000
