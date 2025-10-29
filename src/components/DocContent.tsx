import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface DocContentProps {
  pageId: string;
}

const pageContent: Record<string, { title: string; content: JSX.Element }> = {
  intro: {
    title: 'Добро пожаловать в документацию',
    content: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground">
          Здесь вы найдете полную документацию по всем плагинам нашего Minecraft сервера.
          Каждый плагин содержит подробное описание, список команд и примеры конфигурации.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icon name="DollarSign" size={24} className="text-primary" />
                <CardTitle>EconomyPlugin</CardTitle>
              </div>
              <CardDescription>
                Система экономики и валюты на сервере
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Управление балансом игроков, транзакции, магазины и торговля.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={24} className="text-primary" />
                <CardTitle>RegionProtect</CardTitle>
              </div>
              <CardDescription>
                Защита территорий и регионов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Создание приватных зон, управление правами доступа и защита построек.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icon name="ShoppingCart" size={24} className="text-primary" />
                <CardTitle>AdminShop</CardTitle>
              </div>
              <CardDescription>
                Административный магазин
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Создание магазинов, установка цен и управление товарами.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-primary" />
                <CardTitle>TeleportManager</CardTitle>
              </div>
              <CardDescription>
                Система телепортации
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Точки телепортации, домашние точки и варпы.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  'economy-overview': {
    title: 'EconomyPlugin - Описание',
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Icon name="DollarSign" size={32} className="text-primary" />
          <h2 className="text-2xl font-bold">EconomyPlugin</h2>
        </div>
        
        <p className="text-muted-foreground">
          EconomyPlugin - это полнофункциональная система экономики для вашего Minecraft сервера.
          Плагин предоставляет все необходимые инструменты для управления виртуальной валютой.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Основные возможности</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Управление балансом игроков</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Система транзакций между игроками</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Интеграция с другими плагинами</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>История транзакций</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Топ богатейших игроков</span>
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
        <h2 className="text-2xl font-bold">Команды плагина</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge>Игрок</Badge>
              Команды для игроков
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/balance</code>
              <p className="text-sm text-muted-foreground mt-1">
                Показывает ваш текущий баланс
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/pay [игрок] [сумма]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Переводит деньги другому игроку
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/baltop</code>
              <p className="text-sm text-muted-foreground mt-1">
                Показывает топ богатейших игроков сервера
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="destructive">Админ</Badge>
              Команды для администраторов
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-destructive pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/eco give [игрок] [сумма]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Выдает игроку указанную сумму денег
              </p>
            </div>

            <div className="border-l-4 border-destructive pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/eco take [игрок] [сумма]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Забирает у игрока указанную сумму денег
              </p>
            </div>

            <div className="border-l-4 border-destructive pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/eco set [игрок] [сумма]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Устанавливает баланс игрока на указанную сумму
              </p>
            </div>

            <div className="border-l-4 border-destructive pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/eco reset [игрок]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Сбрасывает баланс игрока до начального значения
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'economy-config': {
    title: 'EconomyPlugin - Конфигурация',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Настройка плагина</h2>
        
        <p className="text-muted-foreground">
          Основные настройки находятся в файле <code className="bg-muted px-2 py-1 rounded">config.yml</code>
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Основные параметры</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`# Основные настройки экономики
currency:
  name: "Монеты"
  symbol: "⭐"
  
# Начальный баланс для новых игроков
starting-balance: 1000

# Минимальная сумма для перевода
minimum-payment: 1

# Максимальный баланс игрока
max-balance: 999999999

# Комиссия за перевод (в процентах)
transfer-fee: 0

# Логирование транзакций
logging:
  enabled: true
  log-file: "transactions.log"
  
# Формат отображения денег
format:
  thousands-separator: ","
  decimal-places: 2`}</code>
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Права доступа (permissions)</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`# Базовые права
economy.balance - Просмотр баланса
economy.pay - Перевод денег
economy.baltop - Просмотр топа

# Права администратора
economy.admin.give - Выдача денег
economy.admin.take - Забрать деньги
economy.admin.set - Установить баланс
economy.admin.reset - Сбросить баланс`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'regions-overview': {
    title: 'RegionProtect - Описание',
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Icon name="Shield" size={32} className="text-primary" />
          <h2 className="text-2xl font-bold">RegionProtect</h2>
        </div>
        
        <p className="text-muted-foreground">
          RegionProtect обеспечивает надежную защиту построек и территорий на вашем сервере.
          Создавайте приватные зоны и управляйте правами доступа.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Основные возможности</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Создание защищенных регионов</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Управление правами доступа</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Добавление участников региона</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Настройка флагов защиты</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Визуализация границ регионов</span>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'regions-commands': {
    title: 'RegionProtect - Команды',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Команды плагина</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge>Игрок</Badge>
              Команды для игроков
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/region create [название]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Создает новый регион в выделенной области
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/region add [регион] [игрок]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Добавляет игрока в список участников региона
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/region remove [регион] [игрок]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Удаляет игрока из участников региона
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/region info [регион]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Показывает информацию о регионе
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'regions-config': {
    title: 'RegionProtect - Конфигурация',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Настройка плагина</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Настройки защиты</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`# Настройки регионов
regions:
  max-per-player: 3
  min-size: 5
  max-size: 100
  
# Флаги защиты по умолчанию
default-flags:
  pvp: false
  mob-spawning: true
  block-break: false
  block-place: false
  use-items: false
  
# Визуализация
visualization:
  particle-type: "BARRIER"
  show-on-enter: true`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'shop-overview': {
    title: 'AdminShop - Описание',
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Icon name="ShoppingCart" size={32} className="text-primary" />
          <h2 className="text-2xl font-bold">AdminShop</h2>
        </div>
        
        <p className="text-muted-foreground">
          AdminShop позволяет создавать серверные магазины с настраиваемыми товарами и ценами.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Основные возможности</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>GUI интерфейс магазина</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Покупка и продажа предметов</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Категории товаров</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Интеграция с экономикой</span>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'shop-commands': {
    title: 'AdminShop - Команды',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Команды плагина</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge>Игрок</Badge>
              Команды для игроков
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/shop</code>
              <p className="text-sm text-muted-foreground mt-1">
                Открывает главное меню магазина
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/shop sell</code>
              <p className="text-sm text-muted-foreground mt-1">
                Открывает меню продажи предметов
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="destructive">Админ</Badge>
              Команды для администраторов
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-destructive pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/shop reload</code>
              <p className="text-sm text-muted-foreground mt-1">
                Перезагружает конфигурацию магазина
              </p>
            </div>

            <div className="border-l-4 border-destructive pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/shop edit</code>
              <p className="text-sm text-muted-foreground mt-1">
                Открывает редактор магазина
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'shop-config': {
    title: 'AdminShop - Конфигурация',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Настройка плагина</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Пример конфигурации товара</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`# Пример товара в магазине
items:
  diamond:
    material: DIAMOND
    name: "&bАлмаз"
    lore:
      - "&7Редкий драгоценный камень"
      - "&7Используется в крафте"
    buy-price: 1000
    sell-price: 500
    category: "resources"
    slot: 10
    
  sword:
    material: DIAMOND_SWORD
    name: "&aАлмазный меч"
    buy-price: 5000
    category: "weapons"
    slot: 15`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'teleport-overview': {
    title: 'TeleportManager - Описание',
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Icon name="MapPin" size={32} className="text-primary" />
          <h2 className="text-2xl font-bold">TeleportManager</h2>
        </div>
        
        <p className="text-muted-foreground">
          TeleportManager управляет системой телепортации на сервере: домашние точки, варпы и запросы на телепортацию.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Основные возможности</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Домашние точки игроков</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Публичные варпы</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Запросы на телепортацию</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Задержка телепортации</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-green-500 mt-0.5" />
              <span>Возврат к точке смерти</span>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'teleport-commands': {
    title: 'TeleportManager - Команды',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Команды плагина</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge>Игрок</Badge>
              Команды для игроков
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/sethome [название]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Устанавливает домашнюю точку
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/home [название]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Телепортирует к домашней точке
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/warp [название]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Телепортирует к публичному варпу
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/tpa [игрок]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Отправляет запрос на телепортацию к игроку
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/back</code>
              <p className="text-sm text-muted-foreground mt-1">
                Возвращает на место смерти
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="destructive">Админ</Badge>
              Команды для администраторов
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-destructive pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/setwarp [название]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Создает публичный варп
              </p>
            </div>

            <div className="border-l-4 border-destructive pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/delwarp [название]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Удаляет публичный варп
              </p>
            </div>

            <div className="border-l-4 border-destructive pl-4 py-2 bg-muted/50 rounded-r">
              <code className="text-sm font-mono">/tp [игрок1] [игрок2]</code>
              <p className="text-sm text-muted-foreground mt-1">
                Телепортирует первого игрока ко второму
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  'teleport-config': {
    title: 'TeleportManager - Конфигурация',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Настройка плагина</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Основные настройки</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`# Настройки телепортации
teleport:
  delay: 3
  cancel-on-move: true
  cancel-on-damage: true
  
# Домашние точки
homes:
  max-per-player: 5
  default-home: "home"
  
# Запросы на ТП
tpa:
  timeout: 60
  cooldown: 30
  
# Варпы
warps:
  show-in-list: true
  permission-per-warp: false`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    ),
  },
};

export default function DocContent({ pageId }: DocContentProps) {
  const content = pageContent[pageId] || pageContent.intro;

  return (
    <ScrollArea className="flex-1">
      <div className="container max-w-4xl py-8 px-6">
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
          {content.content}
        </article>
      </div>
    </ScrollArea>
  );
}
