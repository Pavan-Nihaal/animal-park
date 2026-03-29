#!/bin/bash
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_header() {
  echo -e "${BLUE}════════════════════════════════════════${NC}"
  echo -e "${BLUE}  $1${NC}"
  echo -e "${BLUE}════════════════════════════════════════${NC}"
}

print_success() { echo -e "${GREEN}✓ $1${NC}"; }
print_error() { echo -e "${RED}✗ $1${NC}"; }
print_info() { echo -e "${BLUE}ℹ $1${NC}"; }

check_cmd() {
  if ! command -v $1 &> /dev/null; then
    print_error "$1 not installed"
    return 1
  fi
  print_success "$1 installed"
  return 0
}

clear
print_header "🐾 ANIMAL PARK SETUP"

check_cmd "node" || exit 1
check_cmd "npm" || exit 1
check_cmd "docker" || exit 1
check_cmd "git" || exit 1

print_header "STARTING DOCKER"
if [ -f "1_SETUP_SCRIPTS/docker-compose.yml" ]; then
  docker-compose -f 1_SETUP_SCRIPTS/docker-compose.yml up -d
  sleep 3
  print_success "Docker services started"
else
  print_error "docker-compose.yml not found"
fi

print_header "INSTALLING DEPENDENCIES"
npm install

print_header "✅ SETUP COMPLETE"
echo "Next steps:"
echo "  1. cp .env.example .env.local"
echo "  2. cd apps/api && npm run dev"
echo "  3. cd apps/web && npm run dev"
