import clsx from "clsx";

const showBorder = false

export function up_clsx(classes: string[], show: boolean = showBorder) {
    return clsx(
        border(show),
        ...classes,
    )
}

export function border(show: boolean = showBorder) {
    return {'border border-black rounded-2xl': show}
}
