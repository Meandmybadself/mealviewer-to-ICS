export interface MealViewerResponse {
    physicalLocation: PhysicalLocation;
    announcements: any[];
    externalLinks: any[];
    menuSchedules: MenuSchedule[];
    schoolPriceInfo: any[];
    dailyMenu: any[];
    dailyMenus: DailyMenu[];
    hasDisclaimer: boolean;
    features: Feature[];
    physicalLocationNutritionals: Nutritional[];
    physicalLocationAllergens: Allergen[];
    disclaimers: Disclaimer[];
    cards: any[];
    menuDataSourceId: number;
}

export interface DailyMenu {
    name: string;
    blocks: Block[];
    items: Item[];
    menuId: number;
    orderId: number;
}

export interface Block {
    id: number;
    object: BlockObject | null;
    blockName: BlockName;
    scheduledDate: Date;
    blackedOut: boolean;
    noScheduleText: null;
    cafeteriaLineList?: CafeteriaLineList;
    orderId?: number;
}

export enum BlockName {
    Breakfast = "Breakfast",
    Lunch = "Lunch",
}

export interface CafeteriaLineList {
    object: FoodItemListObject;
    url: string;
    hasMore: boolean;
    data: Datum[];
}

export interface Datum {
    name: LocationNameEnum;
    id: number;
    object: PurpleObject;
    foodItemList: FoodItemList;
}

export interface FoodItemList {
    object: FoodItemListObject;
    url: string;
    hasMore: boolean;
    data: Item[];
}

export interface Item {
    id: number;
    servingSizeId: number;
    serving_Size_Id: number;
    portionQuantity: number;
    portionSize: number;
    portionUnit: PortionUnit;
    calculatedPortionSize: number;
    object: ItemObject;
    menu_Name: MenuName | null;
    menu_Id: number;
    item_Order_Id: number;
    block_Name: BlockName | null;
    block_Id: number;
    block_Type: BlockType | null;
    menu_Block_Date: Date;
    location_Id: number;
    imageFileName: null;
    location_Name: LocationNameEnum | null;
    physical_Location_Name: LocationNameEnum | null;
    item_Id: number;
    item_Type: ItemType;
    item_RatingLevel: number;
    item_Type_Order_Id: number;
    item_Name: string;
    item_Name_Line_2: null | string;
    block_Location_Status: BlockLocationStatus | null;
    block_Order: number;
    location_Order: number;
    mvS_Visible: boolean;
    description: null | string;
    ingredients: null | string;
    nutritionals: Nutritional[];
    allergens: Allergen[];
    badges: any[];
    calories: null;
    fat: null;
    carbs: null;
    whole_Grain: null;
    mG_Cholst: number;
    mG_Sodm: number;
    g_Fiber: number;
    mG_Iron: number;
    mG_Calcm: number;
    iu_Vit_A: number;
    mG_Vit_C: number;
    g_Protn: number;
    g_Carb: number;
    g_T_Fat: number;
    g_S_Fat: number;
    g_Tr_Fat: number;
    meat: boolean;
    grain: boolean;
    fruit: boolean;
    contains_Pork: boolean;
    vegetarian: boolean;
    local: boolean;
    organic: boolean;
    egg: boolean;
    milk: boolean;
    soy: boolean;
    wheat: boolean;
    shellfish: boolean;
    peanut: boolean;
    tree_Nuts: boolean;
    fish: boolean;
    price: number;
    imageLabel: null;
}

export interface Allergen {
    id: number;
    cid: number;
    codeName: CodeName | null;
    itemId: number;
    name: PhysicalLocationAllergenName;
    physicalLocationId: number;
    value: Value | null;
    svg: SVG | null;
}

export enum CodeName {
    Egg = "egg",
    Fish = "fish",
    Milk = "milk",
    Sesame = "sesame",
    Soy = "soy",
    Sunflower = "sunflower",
    Wheat = "wheat",
}

export enum PhysicalLocationAllergenName {
    Egg = "Egg",
    Fish = "Fish",
    Milk = "Milk",
    Peanut = "Peanut",
    Sesame = "Sesame",
    Shellfish = "Shellfish",
    Soy = "Soy",
    Sunflower = "Sunflower",
    TreeNut = "TreeNut",
    Wheat = "Wheat",
}

export enum SVG {
    DefaultEggSVG = "default/egg.svg",
    DefaultFishSVG = "default/fish.svg",
    DefaultMilkSVG = "default/milk.svg",
    DefaultNoIcon = "default/noIcon",
    DefaultSoySVG = "default/soy.svg",
    DefaultWheatSVG = "default/wheat.svg",
}

export enum Value {
    True = "True",
}

export enum BlockLocationStatus {
    A = "A",
}

export enum BlockType {
    Menu = "menu",
}

export enum ItemType {
    BreadRollsStarch = "BREAD/ROLLS/STARCH",
    Breakfast = "BREAKFAST",
    Dressings = "DRESSINGS",
    Entrees = "ENTREES",
    Fruit = "FRUIT",
    Milk = "MILK",
    Miscellaneous = "MISCELLANEOUS",
    Salads = "SALADS",
    Sandwiches = "SANDWICHES",
    Sauce = "SAUCE",
    Snacks = "SNACKS",
    Vegetables = "VEGETABLES",
}

export enum LocationNameEnum {
    EisenhowerAlternate = "Eisenhower Alternate",
    EisenhowerElementary = "Eisenhower Elementary",
}

export enum MenuName {
    ElementaryBreakfast = "Elementary Breakfast",
    ElementaryLunch = "Elementary Lunch",
}

export interface Nutritional {
    id: number;
    name: PhysicalLocationNutritionalName;
    oldName: null;
    cid: number;
    physicalLocationId: number;
    itemId: number;
    value: number;
    rawValue: null | string;
    servingSizeId: number | null;
    isValid: boolean;
    nutrientCode: number;
    portionQuantity: number | null;
    portionUnit: PortionUnit | null;
}

export enum PhysicalLocationNutritionalName {
    AshG = "Ash (g)",
    CalciumMg = "Calcium (mg)",
    Calories = "Calories",
    CholesterolMg = "Cholesterol (mg)",
    FiberG = "Fiber (g)",
    IronMg = "Iron (mg)",
    ProteinG = "Protein (g)",
    SaturatedFatG = "Saturated Fat (g)",
    SodiumMg = "Sodium (mg)",
    SugarsG = "Sugars (g)",
    TotalCarbsG = "Total Carbs (g)",
    TotalFatG = "Total Fat (g)",
    TransFatG = "Trans Fat (g)",
    VitaminAIU = "Vitamin A (IU)",
    VitaminCMg = "Vitamin C (mg)",
    WaterG = "Water (g)",
}

export enum PortionUnit {
    Cup = "cup",
    Ea = "ea",
    Each = "each",
    HalfPint = "HALF PINT",
    Oz = "oz.",
    PortionUnit12CUP = "1/2 CUP",
    PortionUnit12Cup = "1/2 Cup",
    PortionUnit1Cup = "1 Cup",
    PortionUnit1EACH = "1 EACH",
    PortionUnit1Each = "1 Each",
    PortionUnit1OZ = "1 OZ",
    PortionUnit1Oz = "1 oz.",
    PortionUnit25Cup = ".25 cup",
    PortionUnitEACH = "EACH",
    PortionUnitEach = "Each",
    PortionUnitOz = "oz",
    PortionUnitSERVING = "SERVING",
    Sandwich = "Sandwich",
    Serving = "Serving",
    Servings = "Servings",
    Teaspoons = "teaspoons",
    The10Pieces = "10 pieces",
    The12C = "1/2c.",
    The12Cup = "1/2 cup",
    The12CupSpoodle = "1/2 cup spoodle",
    The12Oz = "1/2 oz.",
    The12Pint = "1/2 pint",
    The13Cup = "1/3 cup",
    The14Cup = "1/4 Cup",
    The18Cup = "1/8 CUP",
    The1Breadstick = "1 breadstick",
    The1Cup = "1 CUP",
    The1Ea = "1 ea",
    The1Each = "1 each",
    The1Leaf = "1 leaf",
    The1Oz = "1 oz",
    The1OzLadle = "1 oz. ladle",
    The1Roll = "1 Roll",
    The1Sandwich = "1 sandwich",
    The1Slice = "1 slice",
    The1Stick = "1 stick",
    The1TSP = "1 tsp",
    The1Tbsp = "1 TBSP",
    The25Cup = ".25 Cup",
    The2Each = "2 each",
    The2T = "2 T.",
    The2Tbsp = "2 Tbsp",
    The34C = "3/4 c.",
    The34Cup = "3/4 cup",
    The38Cup = "3/8 Cup",
    The4Nugget = "4 nugget",
    The4OzSpoodle = "4 oz. spoodle",
    The8OzBottle = "8 oz. bottle",
    The8Scoop = "#8 scoop",
}

export enum ItemObject {
    FoodItem = "foodItem",
}

export enum FoodItemListObject {
    List = "list",
}

export enum PurpleObject {
    CafeteriaLine = "cafeteriaLine",
}

export enum BlockObject {
    MenuBlock = "menuBlock",
}

export interface Disclaimer {
    title: string;
    content: string;
}

export interface Feature {
    featureId: number;
    cid: number;
    id: number;
    name: string;
    available: boolean;
    enabled: boolean;
    districtSummerFeedingSettings: null;
}

export interface MenuSchedule {
    dateInformation: DateInformation;
    menuBlocks: Block[];
}

export interface DateInformation {
    dateKey: number;
    dateFull: Date;
    weekNumber: number;
    weekDayName: string;
    monthDay: number;
    monthName: MonthName;
    weekDay: number;
    monthNumber: number;
}

export enum MonthName {
    April = "April",
    March = "March",
}

export interface PhysicalLocation {
    cid: number;
    name: LocationNameEnum;
    address: string;
    city: string;
    state: string;
    zip: string;
    physicalLocationLookup: string;
    physicalLocationAbbreviation: string;
    schoolPdfSettings: null;
    id: number;
    object: string;
    url: string;
    customerName: null;
    locationIds: any[];
    locations: Location[];
    createDate: Date;
    districtLookup: string;
    long: number;
    lat: number;
    digitalSuiteEnabled: boolean;
    setup_complete: boolean;
    physicalLocationTypes: PhysicalLocationType[];
    schoolSettings: SchoolSettings;
    districtSummerFeedingSettings: null;
    physicalLocationSummerFeedingSettings: null;
    dailyMenuId: null;
    blackoutInformation: BlackoutInformation;
    arCampaigns: any[];
}

export interface BlackoutInformation {
    blackoutDates: any[];
    blackoutFeedback: any[];
}

export interface Location {
    id: number;
    object: string;
    cid: number;
    name: LocationNameEnum;
    updateDate: Date;
    blockType: BlockType;
    orderId: number;
    physicalLocationId: number;
    isVisibleByMVSchool: boolean;
}

export interface PhysicalLocationType {
    id: number;
    name: string;
    isPrimary: boolean;
    physicalLocationId: number;
}

export interface SchoolSettings {
    id: number;
    object: string;
    showLocationHeaders: boolean;
    showItemHeaders: boolean;
    showAllergens: boolean;
    schoolColor: string;
    schoolLogo: string;
    schoolImage: null;
    schoolImageDesktop: null;
    showSevenDayView: boolean;
    showDuplicateItems: boolean;
    physicalLocationId: number;
    showServingSizeOnHover: boolean;
    showServingSizeNextToMenuItem: boolean;
}
