import Script from "next/script";
import PrimaryButton from "../../Button/PrimaryButton";

interface RegisterProps {
  eventId: string;
  eventLink: string;
}

export default function Register({ eventId, eventLink }: RegisterProps) {
  const elementId = Math.random().toString(16);
  return (
    <>
      <noscript>
        <a href={eventLink} rel="noopener noreferrer" target="_blank">
          Iscriviti su Eventbrite
        </a>
      </noscript>
      <PrimaryButton
        id={`eventbrite-widget-modal-trigger-${elementId}`}
        type="button"
      >
        Iscriviti adesso
      </PrimaryButton>

      <Script
        type="text/javascript"
        strategy="lazyOnload"
        id={`eventbrite-signup-script-${elementId}`}
      >
        {`var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '${eventId}',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-${elementId}',
        onOrderComplete: exampleCallback
    });`}
      </Script>
    </>
  );
}
