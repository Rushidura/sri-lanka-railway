# Sri Lanka Railways · The Island by Rail

This is a Next.js App Router site using the Sites Vinext runtime. It reworks the supplied railway site sketches into responsive Home, About, Services, Train Schedule, Passenger Information, Stations and Notices pages.

## Local development

Run `npm run dev` and open the local URL printed by Vinext. `npm run build` creates the deployable Worker site.

The site includes an island-wide station directory sourced from the official railway directory. Schedule searches hand off to official railway pages; live times, inventory and ticket purchases are not simulated here. The schedule page reflects the official site's current notice that its timetable is under upgrade. Reservation and commuter ticket actions open the railway's official portals.

The editorial overview and imagery are a design concept. Official sources remain linked for confirmation. Service, station and notice sources were researched on 20 October 2026; see `data/content-data.json` for source URLs and coverage.
