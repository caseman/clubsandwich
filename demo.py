#!/usr/bin/env python
from math import floor

from bearlibterminal import terminal
from clubsandwich.blt.state import blt_state
from clubsandwich.director import DirectorLoop, Scene
from clubsandwich.geom import Rect, Point, Size
from clubsandwich.ui import (
    LabelView,
    ButtonView,
    FirstResponderContainerView,
    WindowView,
    ListView,
    LayoutOptions,
    UIScene,
    CyclingButtonView,
)


LOGO = """
  _______     __     ____             __       _     __ 
 / ___/ /_ __/ /    / __/__ ____  ___/ /    __(_)___/ / 
/ /__/ / // / _ \  _\ \/ _ `/ _ \/ _  / |/|/ / / __/ _ \\
\___/_/\_,_/_.__/ /___/\_,_/_//_/\_,_/|__,__/_/\__/_//_/
"""


class MainMenuScene(UIScene):
    def __init__(self, *args, **kwargs):
        views = [
            LabelView(
                LOGO[1:].rstrip(),
                layout_options=LayoutOptions.row_top(0.5)),
            LabelView(
                "Try resizing the window!",
                layout_options=LayoutOptions.centered('intrinsic', 'intrinsic')),
            ButtonView(
                text="Play", callback=self.play,
                layout_options=LayoutOptions.row_bottom(4).with_updates(
                    left=0.2, width=0.2, right=None)),
            ButtonView(
                text="Settings", callback=self.show_settings,
                layout_options=LayoutOptions.row_bottom(4).with_updates(
                    left=0.4, width=0.2, right=None)),
            ButtonView(
                text="Quit", callback=lambda: self.director.pop_scene(),
                layout_options=LayoutOptions.row_bottom(4).with_updates(
                    left=0.6, width=0.2, right=None)),
        ]
        super().__init__(views, *args, **kwargs)

    def play(self):
        self.director.push_scene(CharacterCreationScene())

    def show_settings(self):
        self.director.push_scene(SettingsScene())


class CharacterCreationScene(UIScene):
    def __init__(self, *args, **kwargs):
        view = WindowView(
            'Character',
            layout_options=LayoutOptions(top=7, right=10, bottom=7, left=10),
            subviews=[
                LabelView('There is no game yet.', layout_options=LayoutOptions.row_top(0.5)),
                ButtonView(
                    text='Darn', callback=lambda: self.director.pop_scene(),
                    layout_options=LayoutOptions.row_bottom(0.5)),
            ]
        )
        super().__init__(view, *args, **kwargs)

        self.covers_screen = False


class SettingsScene(UIScene):
    OPTIONS = {
        'Difficulty': ["I'm too young to die", "Hey, not too rough", "Hurt me plenty", "Ultra-Violence", "Nightmare!"],
        'Advanced water effects': ['True', 'False'],
        'Sound level (out of 10)': ['Off', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        'Music level (out of 10)': ['Off', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        'Permadeath': ['True', 'False'],
        'FXAA': ['True', 'False'],
        'Shadow quality': ['No shadows', 'I have a potato', 'Medium', 'High', 'Ridiculous'],
        'Realtime': ['True', 'False'],
        'Send system analytics to Facebook': ['True', 'False'],
        'Burn extra CPU just for fun': ['True', 'False'],
        'Include EMACS implementation': ['True', 'False'],
        'Include LISP implementation': ['True', 'False'],
        'Include email client implementation': ['True', 'False'],
    }

    def __init__(self, *args, **kwargs):
        view = WindowView(
            'Settings',
            layout_options=LayoutOptions.centered(60, 20),
            subviews=[
                LabelView('Sorry about the weird tab/arrow behavior.\nWill fix soon.', layout_options=LayoutOptions.row_top(2)),
                ListView(
                    [
                        (k, CyclingButtonView(v, v[0], callback=lambda _: None, align_horz='left'))
                        for k, v in sorted(SettingsScene.OPTIONS.items())
                    ],
                    value_column_width=20,
                    layout_options=LayoutOptions(bottom=3).with_updates(top=2)),
                ButtonView(
                    text='Apply', callback=self.apply,
                    layout_options=LayoutOptions.row_bottom(3).with_updates(right=0.5)),
                ButtonView(
                    text='Cancel', callback=lambda: self.director.pop_scene(),
                    layout_options=LayoutOptions.row_bottom(3).with_updates(left=0.5)),
            ])
        super().__init__(view, *args, **kwargs)

        # this lets the main screen show underneath
        self.covers_screen = False

    def apply(self):
        print("Your choices are meaningless.")
        self.director.pop_scene()


class DemoLoop(DirectorLoop):
    def terminal_init(self):
        super().terminal_init()
        terminal.set("""
        window.resizeable=true;
        """)

    def get_initial_scene(self):
        return MainMenuScene()


if __name__ == '__main__':
    DemoLoop().run()