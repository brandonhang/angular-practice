## Forked from [Angular/Angular-Seed][https://github.com/angular/angular-seed]

This is meant to be practice using AngularJS to build a webapp (thus, no CSS).  The
API used to pull the sports data is from [Stattleship][https://www.stattleship.com/].
I ended up fighting with the API more than I did learn Angular.  I initially wanted
to show stat leaders from the 2015-2016 NBA regular season but trying to extract NBA
data in general from this API was a major struggle (not to mention the documentation
seems incomplete).  So, I instead tried to get the schedule for the 76ers' upcoming
season because *I trust the process* but this request returned an empty object.  *So*,
I tried to get last season's schedule for the Sixers but this returned only 40 games.
I know they were awful last season, but they did show up to all 82 games.  *Sooo*, I
switched to the NFL and **finally** got some type of complete data.  I think I will
try to find a better API next go round.