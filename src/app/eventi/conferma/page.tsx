"use client";
import { eventService } from "@/app/eventi/lib/EventService";
import { H3 } from "@/components/ui/Heading";
import { useSearchParams } from "next/navigation";

export default function ConfermaPage() {
  const params = useSearchParams();
  const confirm = params.get("confirm");
  const eventId = params.get("id");

  const event = eventService.getEvent(eventId || "");
  return (
    <main className="container mx-auto lg:pt-6 lg:px-44">
      <div className="lg:p-6 p-2 text-center">
        {confirm === "yes" ? (
          <>
            <H3>😊 Grazie</H3>
            <p className="m-5">per aver confermato la tua partecipazione all&apos;evento</p>
            {event && (
              <>
                <p className="font-bold">&ldquo;{event.title}&rdquo;</p>
                <p className="m-10 mb-20">
                  Ti aspettiamo il giorno <strong>{event.date.toLocaleDateString("it-IT")}</strong>
                  <br />
                  presso <strong>{event.place}</strong> in {event.address}
                </p>
              </>
            )}
          </>
        ) : (
          <>
            <H3>😞 Ci dispiace</H3>
            <p className="m-5">che non potrai partecipare all&apos;evento</p>
            {event && <p className="font-bold">&ldquo;{event.title}&rdquo;</p>}
            <p className="m-10 mb-20">
              Ma grazie per avercelo fatto sapere.
              <br />
              Ci vediamo al prossimo evento!
            </p>
          </>
        )}
      </div>
    </main>
  );
}
