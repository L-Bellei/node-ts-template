import { UserService } from '@services/UserService';

test('está tudo certo', () => {
	const user = new UserService();

	user.name = 'Leonardo';

	expect(user.name).toEqual('Leonardo');
});
