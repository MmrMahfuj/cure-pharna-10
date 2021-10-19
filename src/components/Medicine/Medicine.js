import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TrMedicine from './TrMedicine/TrMedicine';
import './Medicine.css';

const Medicine = () => {
    const [trMedicines, setTrMedicines] = useState([]);
    const [reMedicines, setReMedicines] = useState([]);

    useEffect(() => {
        fetch('./trandingmedicine.json')
            .then(res => res.json())
            .then(data => setTrMedicines(data))
    }, [])

    useEffect(() => {
        fetch('./regularmedicine.json')
            .then(res => res.json())
            .then(data => setReMedicines(data))
    }, [])

    return (
        <>
            <Container>
                <div className="medicine-banner pt-5 mb-5">
                    <div className="">
                        <h2 className="text-white text-center pt-5 fw-bold">Easily refill and transfer your prescriptions with
                            our NEW online pharmacy experience!</h2>
                    </div>
                </div>
                <h2 className="services-title text-start">Trending <span id="logo">Medicine</span></h2>
                <Row>
                    {
                        trMedicines.map(trMedicine => <TrMedicine key={trMedicine.id} trMedicine={trMedicine}></TrMedicine>)
                    }

                </Row>
            </Container>
            <Container className="mt-5">
                <h2 className="services-title text-start">Regular <span id="logo">Medicine</span></h2>
                <Row>
                    {
                        reMedicines.map(trMedicine => <TrMedicine key={trMedicine.id} trMedicine={trMedicine}></TrMedicine>)
                    }
                </Row>
            </Container>

        </>
    );
};

export default Medicine;