import { SvelteComponentTyped } from "svelte";
import type { SupportedAs } from "../../internal/elements";
import type { HTMLActionArray } from "../../hooks/use-actions";
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
        show?: boolean | undefined;
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
export declare type TransitionChildWrapperProps = typeof __propDef.props;
export declare type TransitionChildWrapperEvents = typeof __propDef.events;
export declare type TransitionChildWrapperSlots = typeof __propDef.slots;
export default class TransitionChildWrapper extends SvelteComponentTyped<TransitionChildWrapperProps, TransitionChildWrapperEvents, TransitionChildWrapperSlots> {
}
export {};
