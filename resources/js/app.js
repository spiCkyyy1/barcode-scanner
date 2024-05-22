import './bootstrap';
import { Livewire, Alpine } from '../../vendor/livewire/livewire/dist/livewire.esm';
import Clipboard from '@ryangjchandler/alpine-clipboard'
import Quagga from '@ericblade/quagga2';
import 'flowbite';
import { hasCamera } from "./hasCamera.js";

Alpine.plugin(Clipboard)
window.Quagga = Quagga;
window.hasCamera = hasCamera;
Livewire.start()
