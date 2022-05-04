export type Packs =
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
	package: Packs;
}

export interface TypeturaProps {
	/** Set Base Value for Fonts */
	base?: number;
	/** Set Scale Value */
	scale?: number;
	/** Use JS to Apply overrides */
	js?: boolean;
	/** Apply additional Selectors */
	selectors?: string | string[];
	/** Use Typetura's Custom Font Packs */
	pack?: Packs;
}

export interface HeadlineProps extends StyleProps {
	/** Configure Heading level  */
	level?: number | string;
}

export interface StyleProps {
	/** Apply a new Animatiton Key */
	key?: string;
	/** Disable Typetura */
	none?: boolean;
	/** Adjust the Scale for this Component */
	scale?: number;
	/** Adjust the Base Size for this Component */
	base?: number;
	/** Adjust the Font Timing for this Component */
	ease?: CSSStyleDeclaration['animationTimingFunction'];
}
