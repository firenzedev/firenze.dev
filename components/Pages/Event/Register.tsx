import PrimaryButton from "../../Button/PrimaryButton";

interface RegisterProps {
  eventId: string;
  eventLink: string;
}

declare global {
  interface Window {
    EBWidgets: any;
  }
}

export default function Register({ eventId, eventLink }: RegisterProps) {
  const elementId = Math.random().toString(16);

  function orderCallback() {
    console.log("order complete, thank you");
  }

  function register() {
    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: eventId,
      modal: true,
      modalTriggerElementId: `eventbrite-widget-modal-trigger-${elementId}`,
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
      <PrimaryButton
        onClick={register}
        id={`eventbrite-widget-modal-trigger-${elementId}`}
        type="button"
      >
        Iscriviti adesso
      </PrimaryButton>
    </>
  );
}
