import { SvelteComponentTyped } from "svelte";
export declare type TTransitionProps = {
    enter?: string;
    /** Classes to add to the transitioning element before the enter phase starts */
    enterFrom?: string;
    /** Classes to add to the transitioning element immediately after the enter phase starts */
    enterTo?: string;
    /**
     * Classes to add to the transitioning element once the transition is done.
     * These classes will persist after that until the leave phase
     */
    entered?: string;
    /** Classes to add to the transitioning element during the entire leave phase */
    leave?: string;
    /** Classes to add to the transitioning element before the leave phase starts */
    leaveFrom?: string;
    /** Classes to add to the transitioning element immediately after the leave phase starts */
    leaveTo?: string;
    /** Whether the element should be unmounted, instead of just hidden, based on the open/closed state */
    unmount?: boolean;
    /**
     * A list of actions to apply to the component's HTML element.
     *
     * Each action must take the form `[action]` or `[action, options]`:
     *
     * use={[[action1], [action2, action2Options], [action3]]}
     */
    use?: HTMLActionArray;
    /** The class attribute for this component. It will always be present. */
    class?: string;
    /** The style attribute for this component. It will always be present. */
    style?: string;
    /** The element this component should render as */
    as?: SupportedAs;
};
import type { SupportedAs } from "../../internal/elements";
import type { HTMLActionArray } from "../../hooks/use-actions";
declare const __propDef: {
    props: {
        enter?: string | undefined;
        /** Classes to add to the transitioning element before the enter phase starts */
        enterFrom?: string | undefined;
        /** Classes to add to the transitioning element immediately after the enter phase starts */
        enterTo?: string | undefined;
        /**
         * Classes to add to the transitioning element once the transition is done.
         * These classes will persist after that until the leave phase
         */
        entered?: string | undefined;
        /** Classes to add to the transitioning element during the entire leave phase */
        leave?: string | undefined;
        /** Classes to add to the transitioning element before the leave phase starts */
        leaveFrom?: string | undefined;
        /** Classes to add to the transitioning element immediately after the leave phase starts */
        leaveTo?: string | undefined;
        /** Whether the element should be unmounted, instead of just hidden, based on the open/closed state */
        unmount?: boolean | undefined;
        /**
         * A list of actions to apply to the component's HTML element.
         *
         * Each action must take the form `[action]` or `[action, options]`:
         *
         * use={[[action1], [action2, action2Options], [action3]]}
         */
        use?: HTMLActionArray | undefined;
        /** The class attribute for this component. It will always be present. */
        class?: string | undefined;
        /** The style attribute for this component. It will always be present. */
        style?: string | undefined;
        /** The element this component should render as */
        as?: SupportedAs | undefined;
    };
    events: {
        afterEnter: CustomEvent<null>;
        afterLeave: CustomEvent<null>;
        beforeEnter: CustomEvent<null>;
        beforeLeave: CustomEvent<null>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type TransitionChildProps = typeof __propDef.props;
export declare type TransitionChildEvents = typeof __propDef.events;
export declare type TransitionChildSlots = typeof __propDef.slots;
export default class TransitionChild extends SvelteComponentTyped<TransitionChildProps, TransitionChildEvents, TransitionChildSlots> {
}
export {};
