# herramienteca

## Useful stuff

### Turso

Dump a database:

```bash
turso db shell <db-name> .dump > dump.sql
```

Load dump into local db:

```bash
sqlite3 local.db < dump.sql
```