import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import faraway from '../assets/img/118 - assignment.png'
import flashcards from '../assets/img/128 - challenge - flash cards.png'
import password from '../assets/img/password.png'



function BasicExample() {
  return (
    <div style={{display: 'flex', justifyContent:'space-evenly', flexWrap: 'wrap'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={faraway} />
      <Card.Body style={{backgroundColor: 'gold', color:'black'}}>
        <Card.Title style={{textAlign:'center'}}>Far Away</Card.Title>
        <Card.Text>
          Trips Management Application
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='https://user-images.githubusercontent.com/41349472/48308383-45ae2900-e531-11e8-84bf-2262655ce3a1.png' />
      <Card.Body style={{backgroundColor: 'gold', color:'black'}}>
        <Card.Title style={{textAlign:'center'}}>Forkify</Card.Title>
        <Card.Text>
          Thousands of recepi including. using API fetching
        </Card.Text>
      </Card.Body>
    </Card>
    

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={flashcards} />
      <Card.Body style={{backgroundColor: 'gold', color:'black'}}>
        <Card.Title style={{textAlign:'center'}}>Flash Cards</Card.Title>
        <Card.Text>
          When the user just click on card it will be change the text and color
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', marginTop: '15px' }}>
      <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvIWHJbVcHgi3TI3TqaR8yXDvwJfHxjkabg&s' />
      <Card.Body style={{backgroundColor: 'gold', color:'black'}}>
        <Card.Title style={{textAlign:'center'}}>Hiring Mine</Card.Title>
        <Card.Text>
          Job seeking application using APi fetching
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', marginTop: '15px' }}>
      <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlCt3eSa8qFsrxfgv4nziQ7-T8KK3P73ZTg&s' />
      <Card.Body style={{backgroundColor: 'gold', color:'black'}}>
        <Card.Title style={{textAlign:'center'}}>Snake Game</Card.Title>
        <Card.Text>
          Creating snake game using DOM manupulations
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', marginTop: '15px' }}>
      <Card.Img variant="top" src={password} />
      <Card.Body style={{backgroundColor: 'gold', color:'black'}}>
        <Card.Title style={{textAlign:'center'}}>Password Generator</Card.Title>
        <Card.Text>
          Generator password using ReactJs, user can set lenght and materials
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;