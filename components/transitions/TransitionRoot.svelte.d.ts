import { SvelteComponentTyped } from "svelte";
export declare type TTransitionRootProps = TTransitionProps & Omit<TRestProps<"div">, "as"> & {
    /** Whether the children should be shown */
    show?: boolean;
    /** Whether the transition should run on initial mount */
    appear?: boolean;
};
import { type TTransitionProps } from "./TransitionChild.svelte";
import type { SupportedAs } from "../../internal/elements";
import type { HTMLActionArray } from "../../hooks/use-actions";
import type { TRestProps } from "../../types";
declare const __propDef: {
    props: {
        enter?: string | undefined;
        enterFrom?: string | undefined;
        enterTo?: string | undefined;
        entered?: string | undefined;
        leave?: string | undefined;
        leaveFrom?: string | undefined;
        leaveTo?: string | undefined;
        unmount?: boolean | undefined;
        use?: HTMLActionArray | undefined;
        class?: string | undefined;
        style?: string | undefined;
        as?: SupportedAs | undefined;
        /** Whether the children should be shown */
        show?: boolean | undefined;
        /** Whether the transition should run on initial mount */
        appear?: boolean | undefined;
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
export declare type TransitionRootProps = typeof __propDef.props;
export declare type TransitionRootEvents = typeof __propDef.events;
export declare type TransitionRootSlots = typeof __propDef.slots;
export default class TransitionRoot extends SvelteComponentTyped<TransitionRootProps, TransitionRootEvents, TransitionRootSlots> {
}
export {};
