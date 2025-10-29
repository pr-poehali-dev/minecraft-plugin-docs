import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DocContentProps {
  pageId: string;
}

const docPages: Record<string, { title: string; content: JSX.Element }> = {
  intro: {
    title: 'Документация плагинов для Minecraft сервера',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground">
            Добро пожаловать в документацию плагинов для нашего Minecraft сервера. Здесь вы найдёте 
            подробные инструкции по настройке и использованию каждого плагина.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icon name="DollarSign" size={24} className="text-primary" />
                <CardTitle>EconomyPlugin</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Система экономики сервера. Управление балансами игроков, транзакции и магазины.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={24} className="text-primary" />
                <CardTitle>RegionProtect</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Защита территорий игроков. Создание регионов и управление правами доступа.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icon name="ShoppingCart" size={24} className="text-primary" />
                <CardTitle>AdminShop</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Административный магазин. Настройка цен, добавление товаров и категорий.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-primary" />
                <CardTitle>TeleportManager</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Система телепортации. Варпы, дома игроков и запросы на телепортацию.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 border-blue-200 mt-6">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Icon name="Info" size={20} className="text-blue-600 shrink-0 mt-1" />
              <div>
                <p className="font-medium text-blue-900">Важно для администраторов</p>
                <p className="text-sm text-blue-800 mt-1">
                  Перед началом работы с плагинами убедитесь, что у вас есть права администратора 
                  и доступ к конфигурационным файлам сервера.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'economy-intro': {
    title: 'EconomyPlugin - Описание',
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground">
          EconomyPlugin предоставляет полноценную систему экономики для вашего сервера.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Основные возможности</h2>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5" />
              <span>Управление балансами игроков</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5" />
              <span>Перевод денег между игроками</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5" />
              <span>История транзакций</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5" />
              <span>Интеграция с другими плагинами</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5" />
              <span>Настраиваемая валюта</span>
            </li>
          </ul>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Требования</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Minecraft 1.19+</Badge>
              <Badge variant="secondary">Java 17+</Badge>
              <Badge variant="secondary">Spigot/Paper</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'economy-commands': {
    title: 'EconomyPlugin - Команды',
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground">
          Список всех доступных команд плагина EconomyPlugin.
        </p>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-mono">/balance [игрок]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Просмотр баланса игрока</p>
              <Badge>Алиас: /bal</Badge>
              <div className="mt-3 p-3 bg-muted rounded-md">
                <p className="text-sm font-mono">Пример: /balance Steve</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-mono">/pay [игрок] [сумма]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Перевести деньги другому игроку</p>
              <div className="mt-3 p-3 bg-muted rounded-md">
                <p className="text-sm font-mono">Пример: /pay Alex 1000</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-mono">/eco [set/give/take] [игрок] [сумма]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Администраторская команда для управления балансом</p>
              <Badge variant="destructive">Только для админов</Badge>
              <div className="mt-3 p-3 bg-muted rounded-md space-y-1">
                <p className="text-sm font-mono">/eco set Steve 5000 - установить баланс</p>
                <p className="text-sm font-mono">/eco give Steve 1000 - добавить к балансу</p>
                <p className="text-sm font-mono">/eco take Steve 500 - убавить баланс</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-mono">/baltop [страница]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Рейтинг самых богатых игроков</p>
              <div className="mt-3 p-3 bg-muted rounded-md">
                <p className="text-sm font-mono">Пример: /baltop 1</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  'economy-config': {
    title: 'EconomyPlugin - Конфигурация',
    content: (
      <div className="space-y-6">
        <p className="text-muted-foreground">
          Настройка плагина через конфигурационный файл config.yml
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Основные параметры</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900 text-slate-50 p-4 rounded-md overflow-x-auto">
              <pre className="text-sm"><code>{`# Конфигурация EconomyPlugin
economy:
  # Название валюты
  currency-name: "монет"
  currency-symbol: "💰"
  
  # Стартовый баланс для новых игроков
  starting-balance: 1000
  
  # Минимальная сумма для перевода
  min-payment: 1
  
  # Комиссия за перевод (в процентах)
  transfer-fee: 0
  
  # Максимальный баланс
  max-balance: 1000000000
  
# Сообщения
messages:
  insufficient-funds: "У вас недостаточно средств!"
  payment-sent: "Вы отправили {amount} {currency} игроку {player}"
  payment-received: "Вы получили {amount} {currency} от игрока {player}"`}</code></pre>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Icon name="AlertTriangle" size={20} className="text-amber-600 shrink-0 mt-1" />
              <div>
                <p className="font-medium text-amber-900">Внимание</p>
                <p className="text-sm text-amber-800 mt-1">
                  После изменения конфигурации необходимо перезагрузить плагин командой /eco reload 
                  или перезапустить сервер.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'regions-intro': {
    title: 'RegionProtect - Описание',
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground">
          RegionProtect обеспечивает защиту территорий игроков от вмешательства других пользователей.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Функционал</h2>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5" />
              <span>Создание защищённых регионов</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5" />
              <span>Управление правами доступа</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5" />
              <span>Добавление друзей в регион</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5" />
              <span>Флаги защиты (PvP, взрывы, мобы)</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5" />
              <span>Приоритеты регионов</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
};

export default function DocContent({ pageId }: DocContentProps) {
  const page = docPages[pageId] || docPages.intro;

  return (
    <ScrollArea className="h-full">
      <div className="max-w-4xl mx-auto px-6 py-8 lg:px-12 lg:py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{page.title}</h1>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
        <div className="prose prose-slate max-w-none">
          {page.content}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>Обновлено: {new Date().toLocaleDateString('ru-RU')}</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <Icon name="ThumbsUp" size={16} />
                <span>Полезно</span>
              </button>
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <Icon name="MessageSquare" size={16} />
                <span>Обратная связь</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
