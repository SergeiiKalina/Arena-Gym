import { Fab } from '@mui/material';
import { FiPhone } from 'react-icons/fi';

function CallBack() {
  return (
    <section className="callback_button">
      <a href="tel:+380931000673">
        <Fab
          sx={{
            backgroundColor: '#f2b800',
            '&:focus': {
              backgroundColor: '#f2b800',
            },
          }}
          size="large"
        >
          <FiPhone />
        </Fab>
      </a>
    </section>
  );
}

export default CallBack;
