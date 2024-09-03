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
          Accordion 1
        </AccordionSummary>
        <AccordionDetails sx={{ color: "rgb(39, 212, 131)" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#393e46", color: "#f3f6ed" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f3f6ed" }} />}
          aria-controls='panel2-content'
          id='panel2-header'
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails sx={{ color: "rgb(39, 212, 131)" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
