#!/usr/bin/env bash
# wait-for-it.sh

set -e

host="$1"
shift
cmd="$@"

until nc -z "$host"; do
  echo "Waiting for $host..."
  sleep 1
done

exec $cmd
