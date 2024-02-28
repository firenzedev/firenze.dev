"use client";
import { PrimaryButton } from "@/components/ui/Button";

interface RegisterProps {
  eventId?: string;
  eventLink?: string;
  externalLink?: string;
  ticketTailorId?: number;
  buttonNumber: number;
}

declare global {
  interface Window {
    EBWidgets: any;
    TTWidget: any;
  }
}

export default function Register({
  eventId,
  eventLink,
  externalLink,

  ticketTailorId,

  buttonNumber,
}: Readonly<RegisterProps>) {
  const elementId = `eventbrite-widget-modal-trigger-${buttonNumber}`;

  function orderCallback() {
    console.log("order complete, thank you");
  }

  function register() {
    if (eventId) {
      window.EBWidgets.createWidget({
        widgetType: "checkout",
        eventId: eventId,
        modal: true,
        modalTriggerElementId: elementId,
        onOrderComplete: orderCallback,
      });
    } else if (eventLink) {
      window.open(externalLink, "_blank");
    } else if (ticketTailorId) {
      window.TTWidget.loadEvent('firenzedev',ticketTailorId);
      
    }
  }

  return (
    <>
      <noscript>
        <a href={eventLink} rel="noopener noreferrer" target="_blank">
          Iscriviti su Eventbrite
        </a>
      </noscript>
      <PrimaryButton onClick={register} id={elementId} type="button">
        Iscriviti adesso
      </PrimaryButton>
    </>
  );
}
