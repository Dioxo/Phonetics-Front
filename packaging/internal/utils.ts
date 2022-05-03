import process from 'process';
import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import { rm, stat } from 'fs-extra';

function findPackageJson(dir = process.cwd()): string | null {
    const files = readdirSync(dir);
    if (files.includes('package.json')) {
        return path.resolve(dir, 'package.json');
    }

    let parent = path.resolve(dir, '..');
    if (dir === parent) return null;
    return findPackageJson(parent);
}

/**
 *
 */
export const getCallerFolder = () => path.dirname(findPackageJson()!);

export const getPackageJson = () => JSON.parse(readFileSync(findPackageJson()!, 'utf8'));

export const getPackageJsonOptions = () => getPackageJson()?.options ?? {};

export async function removeFolder(folder: string) {
    try {
        const result = await stat(folder);
        if (result.isDirectory()) {
            rm(folder, { force: true, recursive: true });
        }
    } catch (e) {
        //ignore
    }
}

export function makeAbsolute(node: string) {
    if (node.startsWith('./')) {
        return path.resolve(getCallerFolder(), node);
    }
    return node;
}
