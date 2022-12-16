import React from 'react'
import { Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export default function GitHubCard() {
    return (
        <Container style={{backgroundColor: "brown", height: "100vh"}}>
            <Card style={{backgroundColor: "lightpink", borderTop: "solid 3px", borderBottom: "solid 3px", position: "relative", top: "200px"}}>
                <Card.Title style={{textAlign: "center"}}><b>sierralopez471471</b></Card.Title>
                <Card.Img src="https://avatars.githubusercontent.com/u/104409009?v=4" alt="lizard wizard" style={{border: "solid 4px", borderRadius: "15px 15px"}}>
                </Card.Img>
                <Card.Text style={{textAlign: "center", justifyContent: "space-between"}}>I'm an aspiring Full Stack Software Developer. I love horror films, psych/prog rock, and coding!</Card.Text>
            </Card>
        </Container>
    )
}