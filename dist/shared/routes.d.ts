import { z } from "zod";
export declare const errorSchemas: {
    validation: z.ZodObject<{
        message: z.ZodString;
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message?: string;
            path?: string;
        }, {
            message?: string;
            path?: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        message?: string;
        errors?: {
            message?: string;
            path?: string;
        }[];
    }, {
        message?: string;
        errors?: {
            message?: string;
            path?: string;
        }[];
    }>;
    badRequest: z.ZodObject<{
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message?: string;
    }, {
        message?: string;
    }>;
    unauthorized: z.ZodObject<{
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message?: string;
    }, {
        message?: string;
    }>;
    forbidden: z.ZodObject<{
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message?: string;
    }, {
        message?: string;
    }>;
    notFound: z.ZodObject<{
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message?: string;
    }, {
        message?: string;
    }>;
    internal: z.ZodObject<{
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message?: string;
    }, {
        message?: string;
    }>;
};
export declare const api: {
    projects: {
        list: {
            method: "GET";
            path: string;
            description: string;
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    title: z.ZodString;
                    description: z.ZodString;
                    techStack: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                    imageUrl: z.ZodString;
                    githubUrl: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                    liveUrl: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                    category: z.ZodString;
                    problemStatement: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    motivation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    systemDesign: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    challenges: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    learnings: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    id?: number;
                    title?: string;
                    description?: string;
                    techStack?: string[];
                    imageUrl?: string;
                    githubUrl?: string;
                    liveUrl?: string;
                    category?: string;
                    problemStatement?: string;
                    motivation?: string;
                    systemDesign?: string;
                    challenges?: string;
                    learnings?: string;
                }, {
                    id?: number;
                    title?: string;
                    description?: string;
                    techStack?: string[];
                    imageUrl?: string;
                    githubUrl?: string;
                    liveUrl?: string;
                    category?: string;
                    problemStatement?: string;
                    motivation?: string;
                    systemDesign?: string;
                    challenges?: string;
                    learnings?: string;
                }>, "many">;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        get: {
            method: "GET";
            path: string;
            description: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    title: z.ZodString;
                    description: z.ZodString;
                    techStack: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                    imageUrl: z.ZodString;
                    githubUrl: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                    liveUrl: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                    category: z.ZodString;
                    problemStatement: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    motivation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    systemDesign: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    challenges: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    learnings: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    id?: number;
                    title?: string;
                    description?: string;
                    techStack?: string[];
                    imageUrl?: string;
                    githubUrl?: string;
                    liveUrl?: string;
                    category?: string;
                    problemStatement?: string;
                    motivation?: string;
                    systemDesign?: string;
                    challenges?: string;
                    learnings?: string;
                }, {
                    id?: number;
                    title?: string;
                    description?: string;
                    techStack?: string[];
                    imageUrl?: string;
                    githubUrl?: string;
                    liveUrl?: string;
                    category?: string;
                    problemStatement?: string;
                    motivation?: string;
                    systemDesign?: string;
                    challenges?: string;
                    learnings?: string;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        create: {
            method: "POST";
            path: string;
            description: string;
            input: z.ZodObject<{
                title: z.ZodString;
                description: z.ZodString;
                techStack: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                imageUrl: z.ZodString;
                githubUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                liveUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                category: z.ZodString;
                problemStatement: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
                motivation: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
                systemDesign: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
                challenges: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
                learnings: z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>;
            }, "strip", z.ZodTypeAny, {
                title?: string;
                description?: string;
                techStack?: string[];
                imageUrl?: string;
                githubUrl?: string;
                liveUrl?: string;
                category?: string;
                problemStatement?: string;
                motivation?: string;
                systemDesign?: string;
                challenges?: string;
                learnings?: string;
            }, {
                title?: string;
                description?: string;
                techStack?: string[];
                imageUrl?: string;
                githubUrl?: string;
                liveUrl?: string;
                category?: string;
                problemStatement?: string;
                motivation?: string;
                systemDesign?: string;
                challenges?: string;
                learnings?: string;
            }>;
            requiresAuth: boolean;
            responses: {
                201: z.ZodObject<{
                    success: z.ZodBoolean;
                    message: z.ZodString;
                    data: z.ZodObject<{
                        id: z.ZodNumber;
                        title: z.ZodString;
                        description: z.ZodString;
                        techStack: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                        imageUrl: z.ZodString;
                        githubUrl: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        liveUrl: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        category: z.ZodString;
                        problemStatement: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        motivation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        systemDesign: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        challenges: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        learnings: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        id?: number;
                        title?: string;
                        description?: string;
                        techStack?: string[];
                        imageUrl?: string;
                        githubUrl?: string;
                        liveUrl?: string;
                        category?: string;
                        problemStatement?: string;
                        motivation?: string;
                        systemDesign?: string;
                        challenges?: string;
                        learnings?: string;
                    }, {
                        id?: number;
                        title?: string;
                        description?: string;
                        techStack?: string[];
                        imageUrl?: string;
                        githubUrl?: string;
                        liveUrl?: string;
                        category?: string;
                        problemStatement?: string;
                        motivation?: string;
                        systemDesign?: string;
                        challenges?: string;
                        learnings?: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    data?: {
                        id?: number;
                        title?: string;
                        description?: string;
                        techStack?: string[];
                        imageUrl?: string;
                        githubUrl?: string;
                        liveUrl?: string;
                        category?: string;
                        problemStatement?: string;
                        motivation?: string;
                        systemDesign?: string;
                        challenges?: string;
                        learnings?: string;
                    };
                    message?: string;
                    success?: boolean;
                }, {
                    data?: {
                        id?: number;
                        title?: string;
                        description?: string;
                        techStack?: string[];
                        imageUrl?: string;
                        githubUrl?: string;
                        liveUrl?: string;
                        category?: string;
                        problemStatement?: string;
                        motivation?: string;
                        systemDesign?: string;
                        challenges?: string;
                        learnings?: string;
                    };
                    message?: string;
                    success?: boolean;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        path: z.ZodString;
                        message: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        message?: string;
                        path?: string;
                    }, {
                        message?: string;
                        path?: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        update: {
            method: "PUT";
            path: string;
            description: string;
            input: z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
                techStack: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
                imageUrl: z.ZodOptional<z.ZodString>;
                githubUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>>;
                liveUrl: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>>;
                category: z.ZodOptional<z.ZodString>;
                problemStatement: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>>;
                motivation: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>>;
                systemDesign: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>>;
                challenges: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>>;
                learnings: z.ZodOptional<z.ZodOptional<z.ZodDefault<z.ZodNullable<z.ZodString>>>>;
            }, "strip", z.ZodTypeAny, {
                title?: string;
                description?: string;
                techStack?: string[];
                imageUrl?: string;
                githubUrl?: string;
                liveUrl?: string;
                category?: string;
                problemStatement?: string;
                motivation?: string;
                systemDesign?: string;
                challenges?: string;
                learnings?: string;
            }, {
                title?: string;
                description?: string;
                techStack?: string[];
                imageUrl?: string;
                githubUrl?: string;
                liveUrl?: string;
                category?: string;
                problemStatement?: string;
                motivation?: string;
                systemDesign?: string;
                challenges?: string;
                learnings?: string;
            }>;
            requiresAuth: boolean;
            responses: {
                200: z.ZodObject<{
                    success: z.ZodBoolean;
                    message: z.ZodString;
                    data: z.ZodObject<{
                        id: z.ZodNumber;
                        title: z.ZodString;
                        description: z.ZodString;
                        techStack: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
                        imageUrl: z.ZodString;
                        githubUrl: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        liveUrl: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        category: z.ZodString;
                        problemStatement: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        motivation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        systemDesign: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        challenges: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        learnings: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        id?: number;
                        title?: string;
                        description?: string;
                        techStack?: string[];
                        imageUrl?: string;
                        githubUrl?: string;
                        liveUrl?: string;
                        category?: string;
                        problemStatement?: string;
                        motivation?: string;
                        systemDesign?: string;
                        challenges?: string;
                        learnings?: string;
                    }, {
                        id?: number;
                        title?: string;
                        description?: string;
                        techStack?: string[];
                        imageUrl?: string;
                        githubUrl?: string;
                        liveUrl?: string;
                        category?: string;
                        problemStatement?: string;
                        motivation?: string;
                        systemDesign?: string;
                        challenges?: string;
                        learnings?: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    data?: {
                        id?: number;
                        title?: string;
                        description?: string;
                        techStack?: string[];
                        imageUrl?: string;
                        githubUrl?: string;
                        liveUrl?: string;
                        category?: string;
                        problemStatement?: string;
                        motivation?: string;
                        systemDesign?: string;
                        challenges?: string;
                        learnings?: string;
                    };
                    message?: string;
                    success?: boolean;
                }, {
                    data?: {
                        id?: number;
                        title?: string;
                        description?: string;
                        techStack?: string[];
                        imageUrl?: string;
                        githubUrl?: string;
                        liveUrl?: string;
                        category?: string;
                        problemStatement?: string;
                        motivation?: string;
                        systemDesign?: string;
                        challenges?: string;
                        learnings?: string;
                    };
                    message?: string;
                    success?: boolean;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        path: z.ZodString;
                        message: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        message?: string;
                        path?: string;
                    }, {
                        message?: string;
                        path?: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        delete: {
            method: "DELETE";
            path: string;
            description: string;
            requiresAuth: boolean;
            responses: {
                204: z.ZodVoid;
                400: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
    };
    skills: {
        list: {
            method: "GET";
            path: string;
            description: string;
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    category: z.ZodString;
                    icon: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id?: number;
                    name?: string;
                    category?: string;
                    icon?: string;
                }, {
                    id?: number;
                    name?: string;
                    category?: string;
                    icon?: string;
                }>, "many">;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        get: {
            method: "GET";
            path: string;
            description: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    category: z.ZodString;
                    icon: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id?: number;
                    name?: string;
                    category?: string;
                    icon?: string;
                }, {
                    id?: number;
                    name?: string;
                    category?: string;
                    icon?: string;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        create: {
            method: "POST";
            path: string;
            description: string;
            input: z.ZodObject<{
                name: z.ZodString;
                category: z.ZodString;
                icon: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name?: string;
                category?: string;
                icon?: string;
            }, {
                name?: string;
                category?: string;
                icon?: string;
            }>;
            requiresAuth: boolean;
            responses: {
                201: z.ZodObject<{
                    success: z.ZodBoolean;
                    message: z.ZodString;
                    data: z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        category: z.ZodString;
                        icon: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id?: number;
                        name?: string;
                        category?: string;
                        icon?: string;
                    }, {
                        id?: number;
                        name?: string;
                        category?: string;
                        icon?: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    data?: {
                        id?: number;
                        name?: string;
                        category?: string;
                        icon?: string;
                    };
                    message?: string;
                    success?: boolean;
                }, {
                    data?: {
                        id?: number;
                        name?: string;
                        category?: string;
                        icon?: string;
                    };
                    message?: string;
                    success?: boolean;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        path: z.ZodString;
                        message: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        message?: string;
                        path?: string;
                    }, {
                        message?: string;
                        path?: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        update: {
            method: "PUT";
            path: string;
            description: string;
            input: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                category: z.ZodOptional<z.ZodString>;
                icon: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                name?: string;
                category?: string;
                icon?: string;
            }, {
                name?: string;
                category?: string;
                icon?: string;
            }>;
            requiresAuth: boolean;
            responses: {
                200: z.ZodObject<{
                    success: z.ZodBoolean;
                    message: z.ZodString;
                    data: z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        category: z.ZodString;
                        icon: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id?: number;
                        name?: string;
                        category?: string;
                        icon?: string;
                    }, {
                        id?: number;
                        name?: string;
                        category?: string;
                        icon?: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    data?: {
                        id?: number;
                        name?: string;
                        category?: string;
                        icon?: string;
                    };
                    message?: string;
                    success?: boolean;
                }, {
                    data?: {
                        id?: number;
                        name?: string;
                        category?: string;
                        icon?: string;
                    };
                    message?: string;
                    success?: boolean;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        path: z.ZodString;
                        message: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        message?: string;
                        path?: string;
                    }, {
                        message?: string;
                        path?: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        delete: {
            method: "DELETE";
            path: string;
            description: string;
            requiresAuth: boolean;
            responses: {
                204: z.ZodVoid;
                400: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
    };
    experiences: {
        list: {
            method: "GET";
            path: string;
            description: string;
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    role: z.ZodString;
                    organization: z.ZodString;
                    period: z.ZodString;
                    description: z.ZodString;
                    type: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id?: number;
                    description?: string;
                    role?: string;
                    organization?: string;
                    period?: string;
                    type?: string;
                }, {
                    id?: number;
                    description?: string;
                    role?: string;
                    organization?: string;
                    period?: string;
                    type?: string;
                }>, "many">;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        get: {
            method: "GET";
            path: string;
            description: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    role: z.ZodString;
                    organization: z.ZodString;
                    period: z.ZodString;
                    description: z.ZodString;
                    type: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id?: number;
                    description?: string;
                    role?: string;
                    organization?: string;
                    period?: string;
                    type?: string;
                }, {
                    id?: number;
                    description?: string;
                    role?: string;
                    organization?: string;
                    period?: string;
                    type?: string;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        create: {
            method: "POST";
            path: string;
            description: string;
            input: z.ZodObject<{
                role: z.ZodString;
                organization: z.ZodString;
                period: z.ZodString;
                description: z.ZodString;
                type: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                description?: string;
                role?: string;
                organization?: string;
                period?: string;
                type?: string;
            }, {
                description?: string;
                role?: string;
                organization?: string;
                period?: string;
                type?: string;
            }>;
            requiresAuth: boolean;
            responses: {
                201: z.ZodObject<{
                    success: z.ZodBoolean;
                    message: z.ZodString;
                    data: z.ZodObject<{
                        id: z.ZodNumber;
                        role: z.ZodString;
                        organization: z.ZodString;
                        period: z.ZodString;
                        description: z.ZodString;
                        type: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id?: number;
                        description?: string;
                        role?: string;
                        organization?: string;
                        period?: string;
                        type?: string;
                    }, {
                        id?: number;
                        description?: string;
                        role?: string;
                        organization?: string;
                        period?: string;
                        type?: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    data?: {
                        id?: number;
                        description?: string;
                        role?: string;
                        organization?: string;
                        period?: string;
                        type?: string;
                    };
                    message?: string;
                    success?: boolean;
                }, {
                    data?: {
                        id?: number;
                        description?: string;
                        role?: string;
                        organization?: string;
                        period?: string;
                        type?: string;
                    };
                    message?: string;
                    success?: boolean;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        path: z.ZodString;
                        message: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        message?: string;
                        path?: string;
                    }, {
                        message?: string;
                        path?: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        update: {
            method: "PUT";
            path: string;
            description: string;
            input: z.ZodObject<{
                role: z.ZodOptional<z.ZodString>;
                organization: z.ZodOptional<z.ZodString>;
                period: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
                type: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                description?: string;
                role?: string;
                organization?: string;
                period?: string;
                type?: string;
            }, {
                description?: string;
                role?: string;
                organization?: string;
                period?: string;
                type?: string;
            }>;
            requiresAuth: boolean;
            responses: {
                200: z.ZodObject<{
                    success: z.ZodBoolean;
                    message: z.ZodString;
                    data: z.ZodObject<{
                        id: z.ZodNumber;
                        role: z.ZodString;
                        organization: z.ZodString;
                        period: z.ZodString;
                        description: z.ZodString;
                        type: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id?: number;
                        description?: string;
                        role?: string;
                        organization?: string;
                        period?: string;
                        type?: string;
                    }, {
                        id?: number;
                        description?: string;
                        role?: string;
                        organization?: string;
                        period?: string;
                        type?: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    data?: {
                        id?: number;
                        description?: string;
                        role?: string;
                        organization?: string;
                        period?: string;
                        type?: string;
                    };
                    message?: string;
                    success?: boolean;
                }, {
                    data?: {
                        id?: number;
                        description?: string;
                        role?: string;
                        organization?: string;
                        period?: string;
                        type?: string;
                    };
                    message?: string;
                    success?: boolean;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        path: z.ZodString;
                        message: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        message?: string;
                        path?: string;
                    }, {
                        message?: string;
                        path?: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        delete: {
            method: "DELETE";
            path: string;
            description: string;
            requiresAuth: boolean;
            responses: {
                204: z.ZodVoid;
                400: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
    };
    messages: {
        list: {
            method: "GET";
            path: string;
            description: string;
            requiresAuth: boolean;
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    email: z.ZodString;
                    subject: z.ZodString;
                    message: z.ZodString;
                    createdAt: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id?: number;
                    name?: string;
                    email?: string;
                    subject?: string;
                    message?: string;
                    createdAt?: string;
                }, {
                    id?: number;
                    name?: string;
                    email?: string;
                    subject?: string;
                    message?: string;
                    createdAt?: string;
                }>, "many">;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        get: {
            method: "GET";
            path: string;
            description: string;
            requiresAuth: boolean;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    email: z.ZodString;
                    subject: z.ZodString;
                    message: z.ZodString;
                    createdAt: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id?: number;
                    name?: string;
                    email?: string;
                    subject?: string;
                    message?: string;
                    createdAt?: string;
                }, {
                    id?: number;
                    name?: string;
                    email?: string;
                    subject?: string;
                    message?: string;
                    createdAt?: string;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        create: {
            method: "POST";
            path: string;
            description: string;
            input: z.ZodObject<{
                name: z.ZodString;
                email: z.ZodString;
                subject: z.ZodDefault<z.ZodString>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name?: string;
                email?: string;
                subject?: string;
                message?: string;
            }, {
                name?: string;
                email?: string;
                subject?: string;
                message?: string;
            }>;
            responses: {
                201: z.ZodObject<{
                    success: z.ZodBoolean;
                    message: z.ZodString;
                    data: z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        email: z.ZodString;
                        subject: z.ZodString;
                        message: z.ZodString;
                        createdAt: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id?: number;
                        name?: string;
                        email?: string;
                        subject?: string;
                        message?: string;
                        createdAt?: string;
                    }, {
                        id?: number;
                        name?: string;
                        email?: string;
                        subject?: string;
                        message?: string;
                        createdAt?: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    data?: {
                        id?: number;
                        name?: string;
                        email?: string;
                        subject?: string;
                        message?: string;
                        createdAt?: string;
                    };
                    message?: string;
                    success?: boolean;
                }, {
                    data?: {
                        id?: number;
                        name?: string;
                        email?: string;
                        subject?: string;
                        message?: string;
                        createdAt?: string;
                    };
                    message?: string;
                    success?: boolean;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        path: z.ZodString;
                        message: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        message?: string;
                        path?: string;
                    }, {
                        message?: string;
                        path?: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }, {
                    message?: string;
                    errors?: {
                        message?: string;
                        path?: string;
                    }[];
                }>;
                429: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
        delete: {
            method: "DELETE";
            path: string;
            description: string;
            requiresAuth: boolean;
            responses: {
                204: z.ZodVoid;
                400: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
                500: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message?: string;
                }, {
                    message?: string;
                }>;
            };
        };
    };
};
export type Api = typeof api;
