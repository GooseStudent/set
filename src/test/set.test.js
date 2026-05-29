import Team from '../set.js';

describe('Класс Team', () => {
    test('должен правильно добавлять персонажей без дубликатов', () => {
        const team = new Team();
        team.add('воин');
        team.add('маг');
        team.add('воин'); 
        team.addAll('лучник', 'маг', 'паладин', 'воин');
        
        const result = team.toArray();
        
        expect(result).toEqual(['воин', 'маг', 'лучник', 'паладин']);
        expect(result.length).toBe(4);
    });
});