// make a hundered people
UNWIND range(1,100) as surname
WITH surname
CREATE (p:Person {uuid:randomUUID(), name:"Bob " + surname})

// random followers
MATCH (a:Person)
WITH apoc.coll.randomItems(COLLECT(a), 100) AS people
WHERE size(people) > 1 
UNWIND range(0, size(people)/2*2-1, 2) AS i
WITH people[i] AS follower, people[i+1] AS influencer
MERGE (follower)-[:FOLLOW]->(influencer)

// random dates
WITH 1000 as amount, 2022 as startYear, 2023 as endYear
WITH range(1, amount) as xx, startYear, (endYear - startYear) as yearRange
UNWIND xx as x
WITH date({
  year:toInteger(1+startYear+floor(rand()*yearRange)), 
  month:toInteger(1+floor(rand()*12)), 
  day:toInteger(1+floor(rand()*27))
}) as d
RETURN d

// random content
MATCH (a:Person)
CALL {
    WITH a
    UNWIND range(1, toInteger(rand()*10 + 1)) AS postNumber
    WITH a, postNumber, datetime({
        year:2023, 
        month:toInteger(1+floor(rand()*12)), 
        day:toInteger(1+floor(rand()*27))
    }) as day
    MERGE (a)-[:CREATE]->(c:Content {uuid:randomUUID(), title: "Post " + postNumber, timestamp:day})
}

// random views
MATCH (a:Person)
CALL {
  WITH a
  MATCH (c:Content)
  WITH a, apoc.coll.randomItems(COLLECT(c), 10) AS contents
  UNWIND contents AS content
  MERGE (a)-[:VIEW]->(content)
}

