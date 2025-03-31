# Changelog

Notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [unreleased]

- Replacing `directory-tree` by internal method - with this `npm install` is no longer needed.
- Fix name, version, contributors and description in `package.json`
- Switch LICENSE file to markdown for better readability
- Format README and add Contributing section
- Add `.gitignore` to ignore `node_modules` directory
- Replace console by Log
- Add ESLint and handle linting issues

## [2.5.1](https://github.com/dathbe/MMM-MyStandings/compare/v2.5.0...v2.5.1) - 2025-03-30

- Replace axios dependency with built-in fetch

## [2.5.0](https://github.com/dathbe/MMM-MyStandings/compare/v2.4.0...v2.5.0) - 2025-03-28

- NEW FEATURE: New option `addLeagueToTitle` to give users the option to switch off the previously added feature of adding the league name to the table title (it takes up space, and doesn't play nice with some soccer leagues, so I've given the option to remove it)
- NEW FEATURE:  Added ranking badges to NWSL standings for playoff spots
- CHANGED BEHAVIOR: I've changed all of the names of the soccer leagues to be used in the config file from "XXX_XXX" to "Xxx Xxx".  The old names will continue to work, but will no longer be listed in the README and may be removed at a future date.  *Please update your config files*.  The new styling plays nicer with adding the league name to table titles.
- Added CHANGELOG.md
- Added CODE_OF_CONDUCT.md
- Added LICENSE
- Update package.json
- New screenshot (PNG instead of JPG to hopefully get picked up by <https://kristjanesperanto.github.io/MagicMirror-3rd-Party-Modules/>)
- Some new logos

## [2.4.0](https://github.com/dathbe/MMM-MyStandings/compare/v2.3.0...v2.4.0) - 2025-03-28

- NEW FEATURE: Added Rugby league standings
- NEW FEATURE: Added alternative standings for NBA (league, conferences), MBL (all MLB, leagues, wild card, playoffs), NFL (league, conferences, playoffs), NHL (league, conferences, wild card, playoffs)
- NEW FEATURE: Added rankings badges for certain standings
- NEW FEATURE: Added league name before the displayed standings (e.g., "FIFA World Cup Group A" instead of previous "Group A")
- Improved handling of standings rotation; going forward, will rotate through divisions that have received information, ignoring any improperly formatting `groups`.
- Fixed bug involving uniqueID
- Some css formatting tweaks
- Some README clarifications
- Bumped axios dependency to v1.8.4 for security

## [2.3.0](https://github.com/dathbe/MMM-MyStandings/compare/v2.2.0...v2.3.0) - 2025-03-26

- NEW FEATURE: Added `colored` option to allow display of module in grayscale
- NEW FEATURE: Added NCAAW rankings
- Simplified default config to display a more limited subset of available standings
- Updated some available soccer leagues
- Some css formatting changes
- Corrected NCAAF ASUN Conference name
- Some README changes for clarity
- Some new logos

## [2.2.0](https://github.com/dathbe/MMM-MyStandings/compare/v2.1.0...v2.2.0) - 2025-03-25

- NEW FEATURE: Added NCAAF and NCAAM rankings with ranking badges
- Improved handling of leagues where groups left undefined; this fixes a bug that would display all soccer Groups together even if `showByDivision` was set to `true`.  Going forward, if a league has any divisions, all will be rotated through if `groups` is left `undefined`.
- Added `rankingLength` option for displaying partial (<25) NCAA ranking standings
- Cleaned up README
- Lots of new logos

## [2.1.0](https://github.com/dathbe/MMM-MyStandings/compare/2.0.0...v2.1.0) - 2025-03-24

- NEW FEATURE: Improved logo handling so that module will fall back to ESPN urls if local file not available - no more missing logos!
- NEW FEATURE: Adds sport name before standings of NCAA conferences ("NCAAM Big Ten" instead of ambiguous "Big Ten")
- Placeholder improvement allowing multiple api urls for each sport for planned implementation of alternative (not just division) standings
- Some initial work toward adding NCAA rankings lists (non-functional)
- Moved all NCAA logos to `NCAA` subfolder to avoid duplication
- Lots of new logos

## [2.0.0](https://github.com/dathbe/MMM-MyStandings/compare/tag/2.0.0) - 2025-03-23 - First fork version

Forked from [vincep5](https://github.com/vincep5/MMM-MyStandings/compare/master...dathbe:2.0.0).

- NEW FEATURE: Allows multiple instances of module in same config file
- Updated css formatting
- Corrected some stat names
- Conformed install instructions to best practices
- Added updating instructions
- Lots of logo additions
- Migrated from `request` dependency to `axios`
- Cleaned up `package.json` and added information
