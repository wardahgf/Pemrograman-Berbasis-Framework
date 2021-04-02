import React from 'react'
import { Jumbotron, Button } from 'reactstrap';


function HomePage() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Home Page</h1>
                <p className="lead">Selamat datang di toko kami</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default HomePage