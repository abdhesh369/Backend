import { type Project, type Skill, type Experience, type Message, type InsertMessage, type InsertProject, type InsertSkill, type InsertExperience } from "../shared/schema.js";
export declare class DatabaseStorage {
    private skillsCache;
    private experiencesCache;
    private cacheTimestamp;
    private CACHE_TTL;
    private invalidateSkillsCache;
    private invalidateExperiencesCache;
    getProjects(): Promise<Project[]>;
    getProjectById(id: number): Promise<Project | null>;
    createProject(project: InsertProject): Promise<Project>;
    updateProject(id: number, project: Partial<InsertProject>): Promise<Project>;
    deleteProject(id: number): Promise<void>;
    getSkills(): Promise<Skill[]>;
    getSkillById(id: number): Promise<Skill | null>;
    createSkill(skill: InsertSkill): Promise<Skill>;
    updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill>;
    deleteSkill(id: number): Promise<void>;
    getExperiences(): Promise<Experience[]>;
    getExperienceById(id: number): Promise<Experience | null>;
    createExperience(exp: InsertExperience): Promise<Experience>;
    updateExperience(id: number, exp: Partial<InsertExperience>): Promise<Experience>;
    deleteExperience(id: number): Promise<void>;
    getMessages(): Promise<Message[]>;
    getMessageById(id: number): Promise<Message | null>;
    createMessage(message: InsertMessage): Promise<Message>;
    deleteMessage(id: number): Promise<void>;
}
export declare const storage: DatabaseStorage;
