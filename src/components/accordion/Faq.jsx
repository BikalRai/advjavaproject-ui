import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faq.scss";

export default function AccordionUsage() {
  return (
    <div className='faq'>
      <h2>FAQ</h2>
      <Accordion
        sx={{ backgroundColor: "#393e46", color: "#f3f6ed" }}
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f3f6ed" }} />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          How to browse for different venues?
        </AccordionSummary>
        <AccordionDetails sx={{ color: "rgb(39, 212, 131)" }}>
          Click on browse venues in the services section, where you can find it
          in the card. Once you have clicked on the button, you can start
          browsing the various different venues available.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#393e46", color: "#f3f6ed" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f3f6ed" }} />}
          aria-controls='panel2-content'
          id='panel2-header'
        >
          How to create a booking?
        </AccordionSummary>
        <AccordionDetails sx={{ color: "rgb(39, 212, 131)" }}>
          Once you have selected the venue that you want to play in, then you
          can click the venue to go into their page and see all the available
          timings.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#393e46", color: "#f3f6ed" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f3f6ed" }} />}
          aria-controls='panel2-content'
          id='panel2-header'
        >
          What is the cancellation policy?
        </AccordionSummary>
        <AccordionDetails sx={{ color: "rgb(39, 212, 131)" }}>
          All different venues have their own cancellation policies, but to
          cancel your booking, you have to at least pay a penalty.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#393e46", color: "#f3f6ed" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f3f6ed" }} />}
          aria-controls='panel2-content'
          id='panel2-header'
        >
          What to cancel a booking?
        </AccordionSummary>
        <AccordionDetails sx={{ color: "rgb(39, 212, 131)" }}>
          Go to mybookings section and then you can cancel the booking.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
