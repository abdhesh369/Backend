#!/bin/bash

# Set production environment for Render
export NODE_ENV=production
export RENDER=true
export DATABASE_PATH=/tmp/portfolio-db

echo "================================================"
echo "Starting Portfolio Backend on Render"
echo "================================================"
echo "NODE_ENV: $NODE_ENV"
echo "RENDER: $RENDER"
echo "DATABASE_PATH: $DATABASE_PATH"
echo "PWD: $PWD"
echo "================================================"

# Run the Node app
exec node dist/src/index.js