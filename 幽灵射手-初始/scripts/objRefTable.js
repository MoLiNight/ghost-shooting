const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.bound,
		C3.Behaviors.destroy,
		C3.Behaviors.scrollto,
		C3.Behaviors.Bullet,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetPos,
		C3.Plugins.System.Exps.scrollx,
		C3.Plugins.System.Exps.scrolly,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Mouse.Cnds.OnMovement,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.MoveForward,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.StopLoop
	];
};
self.C3_JsPropNameTable = [
	{Background: 0},
	{Score: 0},
	{"8方向": 0},
	{边界约束: 0},
	{出界销毁: 0},
	{镜头跟随: 0},
	{Player: 0},
	{Hp: 0},
	{子弹: 0},
	{Monster: 0},
	{Boom: 0},
	{bullet: 0},
	{Mouse: 0},
	{Failure: 0}
];

self.InstanceType = {
	Background: class extends self.ITiledBackgroundInstance {},
	Player: class extends self.ISpriteInstance {},
	Monster: class extends self.ISpriteInstance {},
	Boom: class extends self.ISpriteInstance {},
	bullet: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Score: class extends self.ITextInstance {},
	Failure: class extends self.ITextInstance {}
}