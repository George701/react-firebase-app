import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component{
    render(){
        const clients = [
            {
                id: '434343433',
                firstName: 'Kevin',
                lastName: 'Smith',
                email: 'kevin.smith@gmail.com',
                phone: '555-555-555',
                balance: '30'
            },
            {
                id: '37264236',
                firstName: 'Robert',
                lastName: 'Paulson',
                email: 'bob.paul@gmail.com',
                phone: '444-444-6666',
                balance: '50'
            }
        ];

        if(clients){
            return(
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                {' '}
                                <i className="fas fa-users"/> Clients{' '}
                            </h2>
                        </div>
                        <div className="col-md-6"></div>
                    </div>

                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                        {clients.map(client => (
                            <tr key={client.id}>
                                <td>{client.firstName} {client.lastName}</td>
                                <td>{client.email}</td>
                                <td>$ {parseFloat(client.balance).toFixed(2)}</td>
                                <td>
                                    <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                                        <i className="fas fa-arrow-circle-right"/> Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )
        }else{
            return <h1>Loading...</h1>
        }
    }
}

export default Clients;