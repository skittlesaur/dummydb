import {random, randomN} from "../GetRandom.js";

export const getBlank = () => {
    return null;
}

export const getBoolean = () => {
    const random = Math.random();
    return random > 0.5;
}

export const getColor = () => {
    const arr = ["alizarin", "amaranth", "amber", "amethyst", "apricot", "aqua", "aquamarine", "asparagus", "auburn", "azure", "beige", "bistre", "black", "blue", "blue-green", "blue-violet", "bondi-blue", "brass", "bronze", "brown", "buff", "burgundy", "camouflage-green", "caput-mortuum", "cardinal", "carmine", "carrot-orange", "celadon", "cerise", "cerulean", "champagne", "charcoal", "chartreuse", "cherry-blossom-pink", "chestnut", "chocolate", "cinnabar", "cinnamon", "cobalt", "copper", "coral", "corn", "cornflower", "cream", "crimson", "cyan", "dandelion", "denim", "ecru", "emerald", "eggplant", "falu-red", "fern-green", "firebrick", "flax", "forest-green", "french-rose", "fuchsia", "gamboge", "gold", "goldenrod", "green", "grey", "han-purple", "harlequin", "heliotrope", "hollywood-cerise", "indigo", "ivory", "jade", "kelly-green", "khaki", "lavender", "lawn-green", "lemon", "lemon-chiffon", "lilac", "lime", "lime-green", "linen", "magenta", "magnolia", "malachite", "maroon", "mauve", "midnight-blue", "mint-green", "misty-rose", "moss-green", "mustard", "myrtle", "navajo-white", "navy-blue", "ochre", "office-green", "olive", "olivine", "orange", "orchid", "papaya-whip", "peach", "pear", "periwinkle", "persimmon", "pine-green", "pink", "platinum", "plum", "powder-blue", "puce", "prussian-blue", "psychedelic-purple", "pumpkin", "purple", "quartz-grey", "raw-umber", "razzmatazz", "red", "robin-egg-blue", "rose", "royal-blue", "royal-purple", "ruby", "russet", "rust", "safety-orange", "saffron", "salmon", "sandy-brown", "sangria", "sapphire", "scarlet", "school-bus-yellow", "sea-green", "seashell", "sepia", "shamrock-green", "shocking-pink", "silver", "sky-blue", "slate-grey", "smalt", "spring-bud", "spring-green", "steel-blue", "tan", "tangerine", "taupe", "teal", "tenné-(tawny)", "terra-cotta", "thistle", "titanium-white", "tomato", "turquoise", "tyrian-purple", "ultramarine", "van-dyke-brown", "vermilion", "violet", "viridian", "wheat", "white", "wisteria", "yellow", "zucchini"];
    return random(arr)
}

export const getDateTime = () => {
    return new Date(Math.random() * 52 + 1970, Math.random() * 11 + 1, Math.random() * 30 + 1);
}

export const getEncryptedText = (n = 64) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return randomN(n, characters);
}

export const getHexColor = () => {
    const characters = '0123456789ABCDEF';
    return randomN(6, characters);
}

export const getInteger = () => {
    return Math.floor(getNumber());
}

export const getMongoDbObjectId = () => {
    return `ObjectId(${getEncryptedText(24).toLowerCase()})`;
}

export const getNumber = () => {
    return Math.random() * 1000;
}

export const getPassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const length = Math.random() * 10 + 5;
    return randomN(length, characters);
}

export const getTimestamp = () => {
    return Math.round(+getDateTime() / 1000);
}