import '../styles/App.css';
import React, {useState} from 'react';
import {Card, Button, Modal, Pagination,Col,Row} from 'antd';

const {Meta} = Card;

function TodoBook({Databook}) {
    const [visible, setVisible] = useState(false);


    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return(
        <>
            <div className='list'>
            <Card
                hoverable
                className={'cards'}
                style={{width: 240}}
                cover={<img alt="example" src={Databook.cover_page}/>}
            >
                <Meta
                    title={Databook.title}
                    description={Databook.author + "   $" + Databook.price}
                />

                <Button
                    type='primary'
                    className={'button-cards'}
                    onClick={showModal}
                >
                    Ver mas
                </Button>
                <Row>
                <Modal title="Caracteristicas" visible={visible} onOk={handleOk} onCancel={handleCancel}>
                    <div col-6>
                        <p><strong>Titulo:</strong> {Databook.title}</p>
                        <p><strong>Autor:</strong> {Databook.author}</p>
                        <p><strong>Precio:</strong> ${Databook.price}</p>
                        <p><strong>Paginas:</strong> {Databook.pages}</p>
                        <p><strong>Editorial:</strong> {Databook.editorial}</p>
                        <p><strong>Año de Edicion:</strong> {Databook.year_edition}</p>
                        <p><strong>Sinopsis:</strong> {Databook.synopsis}</p>
                        <p>
                            <strong>Estado:</strong>
                            {
                                Databook.new
                                    ? ' Nuevo'
                                    : ' Usado'
                            }

                        </p>
                        <p>
                            <strong>Disponible:</strong>
                            {
                                Databook.available
                                    ? ' Si'
                                    : ' No'
                            }
                        </p>
                    </div>
                    <div col-6>
                        <p>
                            <img alt="example" src={Databook.cover_page} className={'image'}/>
                        </p>
                        <p>
                            <img alt="example" src={Databook.back_cover} className={'image'}/>
                        </p>
                    </div>
                </Modal>
                </Row>
            </Card>
            </div>

        </>
    );
}
export default TodoBook;