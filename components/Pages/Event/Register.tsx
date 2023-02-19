import PrimaryButton from "../../Button/PrimaryButton";

interface RegisterProps {
  eventId: string;
  eventLink: string;
  buttonNumber: number;
}

declare global {
  interface Window {
    EBWidgets: any;
  }
}

export default function Register({
  eventId,
  eventLink,
  buttonNumber,
}: RegisterProps) {
  const elementId = `eventbrite-widget-modal-trigger-${buttonNumber}`;

  function orderCallback() {
    console.log("order complete, thank you");
  }

  function register() {
    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: eventId,
      modal: true,
      modalTriggerElementId: elementId,
      onOrderComplete: orderCallback,
    });
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
