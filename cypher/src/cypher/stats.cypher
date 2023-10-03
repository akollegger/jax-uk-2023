// top 10 influencers
MATCH (f:Person)-[:FOLLOW]->(i:Person)
RETURN i, count(f) as followers
ORDER BY followers DESC LIMIT 10

// who else to follow?
MATCH (you:Person)-[:FOLLOW]->(other:Person)-[:FOLLOW]->(popular:Person)
WHERE you.name = "ABK"
RETURN popular, count(other) as popularity
ORDER by popularity DESC LIMIT 10

// latest from people you follow
MATCH (you:Person)-[:FOLLOW]->(other:Person)-[:CREATE]->(c:Content)
WHERE you.name = "ABK"
RETURN c ORDER by c.timestamp DESC LIMIT 10

// what to view next?
MATCH (you:Person)-[:FOLLOW]->(:Person)-[v:VIEW]->(c:Content)
WHERE you.name = "ABK"
  AND NOT (you)-[:VIEW]->(c)
RETURN c, count(v) as views 
ORDER by views DESC LIMIT 10
