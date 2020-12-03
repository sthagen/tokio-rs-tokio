window.BENCHMARK_DATA = {
  "lastUpdate": 1606998949877,
  "repoUrl": "https://github.com/sthagen/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "stefan@hagen.link",
            "name": "Stefan Hagen",
            "username": "sthagen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c4a677f4bb8a22fe6680f4b5ca56e65cd7c99ae",
          "message": "Merge pull request #25 from tokio-rs/master\n\nSync Fork from Upstream Repo",
          "timestamp": "2020-12-03T12:57:13+01:00",
          "tree_id": "1a4d4bcc017f6a61a652505b1edd4a3bf36ea1ab",
          "url": "https://github.com/sthagen/tokio/commit/6c4a677f4bb8a22fe6680f4b5ca56e65cd7c99ae"
        },
        "date": 1606998949028,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 159250,
            "range": "± 10945",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 605596,
            "range": "± 72174",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4385159,
            "range": "± 1017261",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17341859,
            "range": "± 3561894",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}