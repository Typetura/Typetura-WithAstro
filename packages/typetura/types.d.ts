export declare type Packs =
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

export interface TypeturaProps {
	cdn?: boolean;
	base?: number;
	scale?: number;
	js?: boolean;
	selectors?: string | string[];
	pkg?: Packs;
}

export interface HeadlineProps {
	/** Apply as SubHeadline  */
	sub?: boolean;
	/** Disable Typetura */
	none?: boolean;
	/** Set the Level of Heading Between H1-H3*/
	level?: string | number;
	/** Adjust the Scale for this Headline */
	scale?: number;
	/** Adjust the Base Size for this Headline */
	base?: number;
	/** Adjust the Font Timing for this Headline */
	ease?: CSSStyleDeclaration['animationTimingFunction'];
}
