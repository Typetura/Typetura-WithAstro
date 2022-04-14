export type Packages =
	| 'Armonk'
	| 'Austin'
	| 'Boston'
	| 'Brussels'
	| 'Cape Canaveral'
	| 'Chapel Hill'
	| 'Chicago'
	| 'District of Columbia'
	| 'Fargo'
	| 'Flagstaff'
	| 'Kampala'
	| 'Los Angeles'
	| 'Madrid'
	| 'Memphis'
	| 'New Haven'
	| 'New York'
	| 'Oxford'
	| 'Palo Alto'
	| 'Prague'
	| 'Saint Denis'
	| 'Santa Fe'
	| 'Stockholm';

export interface PackageProps {
	pkg: Packages;
}

export interface TypeturaProps {
	cdn?: boolean;
	base?: number;
	scale?: number;
	js?: boolean;
	selectors?: string | string[];
	pkg?: PackageProps;
}
