// Followers of followers
MATCH (you:Person)-[:FOLLOW]->(other:Person)-[:FOLLOW]->(popular:Person)
WHERE you.name = "ABK"
RETURN popular, count(other) as popularity
ORDER by popularity DESC LIMIT 10

