import 'dotenv/config';
import express from 'express';
import * as shoes from './shoes-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


//Create controller
app.post('/shoes', (req,res) => {
    shoes.createShoe(
        req.body.brand,
        req.body.name,
        req.body.price,
        req.body.traction,
        req.body.materials,
        req.body.fit,
        req.body.weight
        )
        .then(shoe => {
            res.status(201).json(shoe);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'The creation of a document has failed.'});
        });
});


//Retrieve controller
app.get('/shoes', (req, res) => {
    shoes.findShoe()
        .then(shoe => {
            if (shoe !== null) {
                res.json(shoe);
            } else {
                res.status(404).json({ Error: 'The document was not found. '});
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Retrieve document has failed. '});
        });
});

//Retrieve by Id controller
app.get('/shoes/:_id', (req, res) => {
    shoes.findShoeById(req.params._id)
    .then(shoe => {
        if (shoe !== null) {
            res.json(shoe);
        } else {
            res.status(404).json({ Error: 'The document was not found.'});
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Retrieve document has failed. '});
    });
});

//Update controller
app.put('/shoes/:_id', (req, res) => {
    shoes.replaceShoe(
        req.params._id,
        req.body.brand,
        req.body.name,
        req.body.price,
        req.body.traction,
        req.body.materials,
        req.body.fit,
        req.body.weight
    )
    .then(shoe => {
        res.json(shoe);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Document update has failed. '});
    });
});


//Delete controller
app.delete('/shoes/:_id', (req, res) => {
    shoes.deleteById(req.params._id)
        .then(deleteCount => {
            if (deleteCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Document no longer exists '});
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Delete a document has failed.' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

