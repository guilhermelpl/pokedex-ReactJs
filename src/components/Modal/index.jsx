import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function ModalPokemon({ open, handleClose, item }) {
    console.log(item)
    return (
        <div>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        width: "40%",
                        height: "70%",
                        background: "rgba(68, 85, 92, 0.8)",
                        p: 2,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: "5px",
                    }}
                >
                    <Typography className='text-capitalize' variant="h6" component="h2" color={"white"}>
                        {item.name} #{item.id}
                    </Typography>
                       <img src={item.sprites.front_default} alt={item.name} style={{ width: "330px" }} />

                    <div className="row">
                        <div className="col text-center">
                            <Button sx={{ mt: 2 }} onClick={handleClose} variant="contained">
                                Fechar
                            </Button>

                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
